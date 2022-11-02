import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistrationsController } from './registrations.controller';
import { Registration } from './registrations.entity';
import { RegistrationsService } from './registrations.service';

@Module({
  imports:[ TypeOrmModule.forFeature([Registration]),
],
  controllers: [RegistrationsController],
  providers: [RegistrationsService]
})
export class RegistrationsModule {}
