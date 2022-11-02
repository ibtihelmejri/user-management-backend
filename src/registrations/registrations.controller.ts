import { Body, Controller, Post } from "@nestjs/common";
import { AuthCredentialsDto } from "./dto/auth-credentiels.dto";
import { RegistrationsService } from "./registrations.service";

@Controller("api")
export class RegistrationsController {
  constructor(private readonly registrationsService: RegistrationsService) {}

  @Post("/register")
  create(@Body() authCredentialsDto: AuthCredentialsDto) {
    return this.registrationsService.signup(authCredentialsDto);
  }

  @Post("/login")
  signIn(@Body() authCredentialsDto: AuthCredentialsDto) {
    return this.registrationsService.signIn(authCredentialsDto);
  }
}
