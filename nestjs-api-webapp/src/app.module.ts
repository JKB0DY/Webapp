import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {AuthModule} from './auth/auth.module';
import {UserModule} from './user/user.module';
import {HardwareModule} from './hardware/hardware.module';
import {PrismaModule} from './prisma/prisma.module';
import {VeranstaltungModule} from './veranstaltung/veranstaltung.module';
import {VeranstaltungHardwareModule} from './veranstaltung-hardware/veranstaltung-hardware.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: '.env',
		}),
		AuthModule,
		UserModule,
		HardwareModule,
		PrismaModule,
		VeranstaltungModule,
		VeranstaltungHardwareModule,
	],
})
export class AppModule {}
