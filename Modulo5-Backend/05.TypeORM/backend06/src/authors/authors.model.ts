import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class Author{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50})
    name: string;

    @Column({length: 50})
    email: string;
    
    @Column({type: 'text'})
    bio: string;

    @CreateDateColumn({name: 'Created_date'})
    createdDate: Date;

    @UpdateDateColumn({name: 'updated_date'})
    updatedDate: Date;
}