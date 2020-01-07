import { Module } from '@nestjs/common';
import { AuthPidionService } from './auth-pidion.service';
import { AuthPidionController } from './auth-pidion.controller';

@Module({
  providers: [AuthPidionService],
  controllers: [AuthPidionController]
})
export class AuthPidionModule {}
