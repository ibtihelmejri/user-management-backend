import { ApiProperty } from "@nestjs/swagger";
import { CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

export class BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty()
    id: number;

    // @CreateDateColumn({nullable:true})
    // createAt?: Date;

    // @CreateDateColumn({nullable:true})
    // updateAt?: Date;
}