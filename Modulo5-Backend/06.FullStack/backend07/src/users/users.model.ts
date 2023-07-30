import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserRole } from "./user-role.enum";
import { Book } from "src/books/books.model";


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    username: string;

    @Column({unique: true})
    email: string;
    
    @Column()
    password: string;

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.USER
    })
    role: UserRole;

    @Column({nullable: true})
    avatarImage?: string; // nombre de la imagen en la carpeta uploads

    @OneToOne(
        () => Book,
    {nullable: true, cascade: true, eager: true}
    )
    @JoinColumn({name: 'id_book'})
    book: Book;
}