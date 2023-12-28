import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from 'argon2';
import { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";


@Injectable()
export class AuthService{
    constructor(private prisma: PrismaService){}
    
    async signup(dto: AuthDto){
        //generate the password hash
        const hash = await argon.hash(dto.password);

        try {
            //save the new user in the databases
            const user = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    hash,
                },
            });

            //remove the password hash from the user object
            delete user.hash; 

            //return the saved user
            return user

        } catch (error) {
            if(error instanceof PrismaClientKnownRequestError){
                if(error.code === 'P2002'){
                    throw new ForbiddenException('credentials Taken');
                }
            }
            throw error;
        }
    }

    async signin(dto: AuthDto){
        //find the user by email
        const user = await this.prisma.user.findUnique({
            where: {
                email: dto.email,
            }
        });
        //if user not found throw error
        if(!user){
            throw new ForbiddenException('credentials incorrect');
        }

        //compare the password hash
        const  pwMatches = await argon.verify(user.hash, dto.password);

        //if password is incorrect throw error
        if(!pwMatches){
            throw new ForbiddenException('credentials incorrect');
        }

        //send back the user
        delete user.hash;
        return user;
    }
}