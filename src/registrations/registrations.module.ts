import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistrationsController } from './registrations.controller';
import { Registration } from './registrations.entity';
import { RegistrationsService } from './registrations.service';
import {PassportModule} from '@nestjs/passport'
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';

@Module({
  imports:[
    PassportModule.register({ defaultStrategy: 'jwt' }),
     TypeOrmModule.forFeature([Registration]),
     
     JwtModule.register({
       secret: 'topSecret51',
       signOptions: {
         expiresIn: '24h',
       },
     }),
],
  controllers: [RegistrationsController],
  providers: [RegistrationsService]
})
export class RegistrationsModule {}
