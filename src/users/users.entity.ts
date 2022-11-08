import { BaseEntity } from "../base-entity";
import { Column, Entity } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity("users")
export class User extends BaseEntity {
  @Column()
  @ApiProperty()
  avatar: string;
  @Column()
  @ApiProperty()
  email: string;
  @Column()
  @ApiProperty()
  firstname: string;
  @Column()
  @ApiProperty()
  lastname: string;
  @Column()
  @ApiProperty()
  job: string;
}
