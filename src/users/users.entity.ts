import { BaseEntity } from "../base-entity";
import { Column, Entity } from "typeorm";

@Entity('users')
export class User extends BaseEntity {
   @Column({type:'varchar',length:100, nullable:false})
   name:string;
   @Column({type:'varchar',length:100, nullable:false})
   job:string;

}