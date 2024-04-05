import {
	Controller,
	Delete,
	Get,
	HttpCode,
	HttpStatus,
	Post,
	Query,
	// UseGuards,
} from '@nestjs/common';
// import {JwtGuard} from 'src/auth/guard';
import {VeranstaltungHardwareService} from './veranstaltung-hardware.service';

@Controller('api/veranstaltung-hardware')
export class VeranstaltungHardwareController {
	constructor(private veranstaltungService: VeranstaltungHardwareService) {}

	@HttpCode(HttpStatus.CREATED)
	@Post('create')
	create(@Query() query: {idhardware: string; idveranstaltung: string}) {
		const response = this.veranstaltungService.create(
			parseInt(query.idhardware),
			parseInt(query.idveranstaltung)
		);
		if (response === null) {
			return 'Error creating entry.';
		}
		return response;
	}

	@HttpCode(HttpStatus.OK)
	@Get('')
	getAllbyID(
		@Query() query: {idHardware?: string; idveranstaltung?: string}
	) {
		if (query.idHardware) {
			return this.veranstaltungService.getAllIDHardware(
				parseInt(query.idHardware)
			);
		}
		if (query.idveranstaltung) {
			return this.veranstaltungService.getAllIDVeranstaltung(
				parseInt(query.idveranstaltung)
			);
		}
	}

	@HttpCode(HttpStatus.OK)
	@Delete('delete')
	delete(@Query() query: {idhardware: string; idveranstaltung: string}) {
		return this.veranstaltungService.delete(
			parseInt(query.idhardware),
			parseInt(query.idveranstaltung)
		);
	}
}
