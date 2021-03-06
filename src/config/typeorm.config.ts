import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'nestPanfa',
    entities: [__dirname + './**/**/*entity{.ts,.js}'],
    autoLoadEntities: true,
    synchronize: true,
}