import {
	Body,
	Controller,
	Get,
	HttpCode,
	HttpStatus,
	Post,
	Query,
	UseGuards,
} from '@nestjs/common';
import {JwtGuard} from 'src/auth/guard';
import {HardwareService} from './hardware.service';
import {HardwareDto} from './dto';

@UseGuards(JwtGuard)
@Controller('/api/hardware')
export class HardwareController {
	constructor(private hardwareService: HardwareService) {}

	@HttpCode(HttpStatus.CREATED)
	@Post('create')
	create(@Body() dto: HardwareDto) {
		return this.hardwareService.create(dto);
	}

	@HttpCode(HttpStatus.OK)
	@Get('all')
	getALL() {
		return this.hardwareService.getAll();
	}

	@HttpCode(HttpStatus.OK)
	@Get('')
	getOne(@Query('id') id: number) {
		return this.hardwareService.getOne(id);
	}

	@HttpCode(HttpStatus.OK)
	@Post('update')
	update(@Query('id') id: number, @Body() dto: HardwareDto) {
		return this.hardwareService.update(id, dto);
	}

	@HttpCode(HttpStatus.OK)
	@Post('delete')
	delete(@Query('id') id: number) {
		return this.hardwareService.delete(id);
	}
}
