import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {JwtGuard} from 'src/auth/guard';
import {HardwareService} from './hardware.service';
import {HardwareDto} from './dto';

@UseGuards(JwtGuard)
@Controller('/api/hardware')
export class HardwareController {
	constructor(private hardwareService: HardwareService) {}

	@Post('create')
	create(@Body() dto: HardwareDto) {
		return this.hardwareService.create(dto);
	}

	@Get('all')
	getALL() {
		return this.hardwareService.getAll();
	}

	// @Get('one/:id')

	// @Post('update/:id')
}
