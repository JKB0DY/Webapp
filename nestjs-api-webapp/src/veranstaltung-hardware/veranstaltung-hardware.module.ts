import {Module} from '@nestjs/common';
import {VeranstaltungHardwareService} from './veranstaltung-hardware.service';
import {VeranstaltungHardwareController} from './veranstaltung-hardware.controller';

@Module({
	providers: [VeranstaltungHardwareService],
	controllers: [VeranstaltungHardwareController],
})
export class VeranstaltungHardwareModule {}
