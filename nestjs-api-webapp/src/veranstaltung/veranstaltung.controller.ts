import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	HttpStatus,
	Post,
	Query,
	UseGuards,
} from '@nestjs/common';
import {JwtGuard} from 'src/auth/guard';
import {VeranstaltungService} from './veranstaltung.service';
import {VeranstaltungDto} from './dto';

// @UseGuards(JwtGuard)
@Controller('api/veranstaltung')
export class VeranstaltungController {
	constructor(private veranstaltungService: VeranstaltungService) {}

	@HttpCode(HttpStatus.CREATED)
	@Post('create')
	create(@Body() dto: VeranstaltungDto) {
		return this.veranstaltungService.create(dto);
	}

	@HttpCode(HttpStatus.OK)
	@Get('all')
	getALL() {
		return this.veranstaltungService.getAll();
	}

	@HttpCode(HttpStatus.OK)
	@Get('')
	getOne(@Query('id') id: number) {
		return this.veranstaltungService.getOne(id);
	}

	@HttpCode(HttpStatus.OK)
	@Post('update')
	update(@Query('id') id: number, @Body() dto: VeranstaltungDto) {
		return this.veranstaltungService.update(id, dto);
	}

	@HttpCode(HttpStatus.OK)
	@Delete('delete')
	delete(@Query('id') id: number) {
		return this.veranstaltungService.delete(id);
	}
}
