import {Module} from '@nestjs/common';
import {VeranstaltungController} from './veranstaltung.controller';
import {VeranstaltungService} from './veranstaltung.service';

@Module({
	controllers: [VeranstaltungController],
	providers: [VeranstaltungService],
})
export class VeranstaltungModule {}
