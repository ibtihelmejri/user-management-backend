import { BaseEntity } from "../base-entity";
import { Column, Entity, Unique } from "typeorm";

@Entity('registrations')
@Unique('UNIQUE_EMAIL', ['email'])
export class Registration extends BaseEntity {
   @Column({type:'varchar',length:100, nullable:false})
   email:string;
   @Column({type:'varchar',length:100, nullable:false})
   password:string;

}