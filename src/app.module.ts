import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import {config} from './orm.config'
import { RegistrationsModule } from './registrations/registrations.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), UsersModule, RegistrationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
