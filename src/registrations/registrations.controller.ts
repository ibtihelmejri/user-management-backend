import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthCredentialsDto } from "./dto/auth-credentiels.dto";
import { RegistrationsService } from "./registrations.service";

@ApiTags('auth')
@Controller("api")
export class RegistrationsController {
  constructor(private readonly registrationsService: RegistrationsService) {}

  @Post("/register")
  create(@Body() authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.registrationsService.signup(authCredentialsDto);
  }

  @Post("/login")
  signIn(@Body() authCredentialsDto: AuthCredentialsDto):  Promise<{accessToken:string}> {
    return this.registrationsService.signIn(authCredentialsDto);
  }
}
