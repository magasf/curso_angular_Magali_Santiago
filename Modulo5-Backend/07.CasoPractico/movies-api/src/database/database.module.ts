import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            
            password: process.env.NEST_PASSWORD,
            database: 'backend_movieapi',
            entities: [
             
                
            ],
            synchronize: true, 
            logging: true
        })
    ]
})
export class DatabaseModule {}