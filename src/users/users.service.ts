import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./users.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto): Promise<any> {
    try {
      let newUser = this.userRepo.create(createUserDto);

      await this.userRepo.save(newUser);

      return newUser;
    } catch (error) {
      console.log("error when create user", error);
    }
  }

  async findAll() {
    let users = await this.userRepo.find({});
    return users;
  }
}
