import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50})
    name: string;

    @Column({length: 300})
    description: string;

    @Column({nullable: true})
    photo?: string;

    @Column({name: 'min_age'})
    minAge: number;

    @CreateDateColumn({name: 'created_date'})
    createdDate: Date;
}