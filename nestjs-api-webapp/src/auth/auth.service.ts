import {ForbiddenException, Injectable} from '@nestjs/common';
import {PrismaService} from 'src/prisma/prisma.service';
import {AuthDto} from './dto';
import * as argon from 'argon2';
import {PrismaClientKnownRequestError} from '@prisma/client/runtime/library';
import {JwtService} from '@nestjs/jwt';
import {ConfigService} from '@nestjs/config';

@Injectable()
export class AuthService {
	constructor(
		private prisma: PrismaService,
		private jwt: JwtService,
		private config: ConfigService
	) {}

	async signup(dto: AuthDto) {
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

			// return JWT token
			return this.signToken(user.id, user.email);
		} catch (error) {
			if (error instanceof PrismaClientKnownRequestError) {
				if (error.code === 'P2002') {
					throw new ForbiddenException('credentials Taken');
				}
			}
			throw error;
		}
	}

	async signin(dto: AuthDto) {
		//find the user by email
		const user = await this.prisma.user.findUnique({
			where: {
				email: dto.email,
			},
		});
		//if user not found throw error
		if (!user) {
			//only for testing purposes
			this.signup(dto);
			throw new ForbiddenException('credentials incorrect');
		}

		//compare the password hash
		const pwMatches = await argon.verify(user.hash, dto.password);

		//if password is incorrect throw error
		if (!pwMatches) {
			throw new ForbiddenException('credentials incorrect');
		}

		//send back the JWT token
		return this.signToken(user.id, user.email);
	}

	async signToken(
		userid: number,
		email: string
	): Promise<{access_token: string}> {
		const payload = {
			sub: userid,
			email,
		};
		const secret = this.config.get('JWT_SECRET');
		const token = await this.jwt.signAsync(payload, {
			expiresIn: '24h',
			secret: secret,
		});

		return {
			access_token: token,
		};
	}
}
