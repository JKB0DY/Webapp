import {Body, Controller, HttpCode, HttpStatus, Post} from '@nestjs/common';
import {AuthService} from './auth.service';
import {AuthDto} from './dto';

@Controller('api/auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@HttpCode(HttpStatus.CREATED)
	@Post('signup')
	signup(@Body() dto: AuthDto) {
		return this.authService.signup(dto);
	}

	@HttpCode(HttpStatus.ACCEPTED)
	@Post('signin')
	signin(@Body() dto: AuthDto) {
		return this.authService.signin(dto);
	}
}
