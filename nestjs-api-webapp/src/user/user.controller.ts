import {Controller, Get, Query, UseGuards} from '@nestjs/common';
import {User} from '@prisma/client';
import {GetUser} from 'src/auth/decorator';
import {JwtGuard} from 'src/auth/guard';
import {UserService} from './user.service';

@UseGuards(JwtGuard)
@Controller('api/users')
export class UserController {
	constructor(private userService: UserService) {}
	@Get('me')
	getME(@GetUser() user: User) {
		return user;
	}

	@Get('all')
	getAllUsers() {
		return this.userService.getAllUsers();
	}

	@Get()
	getUser(@Query('id') id: number) {
		return this.userService.getUser(id);
	}
}
