import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from 'src/authors/authors.model';
import { Booking } from 'src/bookings/bookings.model';
import { Book } from 'src/books/books.model';
import { Category } from 'src/categories/categories.model';
import { Editorial } from 'src/editorials/editorials.model';
import { Location } from "src/locations/locations.model";
import { User } from 'src/users/users.model';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'admin', // sustituir por variable de entorno
            // password: process.env.NEST_PASSWORD,
            database: 'backend_nest',
            entities: [
                // __dirname + 'src/**/*.model.ts'
                Book, Author, Editorial, Location, Category, User, Booking
            ],
            synchronize: true, // generar tablas automáticamente en base a entidades
            logging: true
        })
    ]
})
export class DatabaseModule {}

// CREAR VARIABLE DE ENTORNO EN MAC
// Símbolo virgulilla en MAX: “option+Ñ”
// nano ~/.zshrc
// Al final del archivo: export NEST_PASSWORD=admin
// source ~/.zshrc
// echo $NEST_PASSWORD

// Powershell
// setx NEST_PASSWORD "admin"
// echo $env:NEST_PASSWORD


