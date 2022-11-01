import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const config: TypeOrmModuleOptions={
    type:'postgres',
    username:'postgres',
    port:5432,
    host:'localhost',
    database:'user_management',
    synchronize:true,
    entities:['dist/**/*.entity{.ts,.js}'],
}