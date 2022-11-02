import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AuthCredentialsDto } from "./dto/auth-credentiels.dto";
import { Registration } from "./registrations.entity";

@Injectable()
export class RegistrationsService {
  constructor(
    @InjectRepository(Registration)
    private registrationRepo: Repository<Registration>
  ) {}

  async create(authCredentialsDto: AuthCredentialsDto): Promise<any> {
    try {
      let newRegister = this.registrationRepo.create(authCredentialsDto);
      await this.registrationRepo.save(newRegister);
      return newRegister;
    } catch (error) {
      console.log("error");
    }
  }
}
