import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AuthCredentialsDto } from "./dto/auth-credentiels.dto";
import { Registration } from "./registrations.entity";
import * as bcrypt from "bcrypt";

@Injectable()
export class RegistrationsService {
  constructor(
    @InjectRepository(Registration)
    private registrationRepo: Repository<Registration>
  ) {}

  async signup(authCredentialsDto: AuthCredentialsDto): Promise<any> {
    const { email, password } = authCredentialsDto;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
      let newRegister = this.registrationRepo.create({
        email,
        password: hashedPassword,
      });
      await this.registrationRepo.save(newRegister);
      return newRegister;
    } catch (error) {
      console.log(error.code);

      if (error.code === "23505") {
        throw new ConflictException({
          error: "Conflict",
          message: error.detail,
          statusCode: 409,
          id: "existing.email",
        });
      } else {
        throw new InternalServerErrorException("Error when creating user");
      }
    }
  }

 async signIn(authCredentialsDto: AuthCredentialsDto): Promise<string>  {
    const {email, password} = authCredentialsDto;
    const register = await this.registrationRepo
    .createQueryBuilder('registration')
    .select('registration')
    .addSelect('registration.password')
    .where({ email })
    .getOne();
    console.log();
    if (register && (await bcrypt.compare(password, register.password))) {
        return 'success'
        // let payload = await this.getTokenPayload(user);
        // let accessToken: string;
        // if (user.roleId === Role.SAL) {
        //   accessToken = await this.jwtService.sign(payload, {
        //     expiresIn: '1h',
        //   });
        // } else {
        //   accessToken = await this.jwtService.sign(payload);
        // }
        // return { accessToken };
      } else {
        throw new UnauthorizedException({
          error: 'Unauthorized',
          message: 'Please check your login credentials',
          statusCode: 401,
          id: 'unauthorized',
        });
      }
    
    
 }
}
