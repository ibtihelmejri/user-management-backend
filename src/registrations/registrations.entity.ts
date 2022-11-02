import { BaseEntity } from "../base-entity";
import { Column, Entity } from "typeorm";

@Entity('registrations')
export class Registration extends BaseEntity {
   @Column({type:'varchar',length:100, nullable:false})
   email:string;
   @Column({type:'varchar',length:100, nullable:false})
   password:string;

}