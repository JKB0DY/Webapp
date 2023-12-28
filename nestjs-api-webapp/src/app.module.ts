import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { HardwareModule } from './hardware/hardware.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule, UserModule, HardwareModule, PrismaModule],
})
export class AppModule {}
