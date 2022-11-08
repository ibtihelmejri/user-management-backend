import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class CreateUserDto {
  @ApiProperty({required:false})
  @IsString()
  avatar: string;

  @ApiProperty()
  @IsEmail()
  email: string;
  
  @IsString()
  @ApiProperty()
  firstname: string;

  @IsString()
  @ApiProperty()
  lastname: string;

  @IsString()
  @ApiProperty()
  job: string;
}
