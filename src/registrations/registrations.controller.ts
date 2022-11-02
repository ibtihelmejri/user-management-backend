import { Body, Controller, Post } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentiels.dto';
import { RegistrationsService } from './registrations.service';

@Controller('registrations')
export class RegistrationsController {
    constructor(private readonly registrationsService: RegistrationsService) { }


    @Post()
    create(
      @Body() authCredentialsDto: AuthCredentialsDto,
    ) {
      return this.registrationsService.create(authCredentialsDto);
    }
}
