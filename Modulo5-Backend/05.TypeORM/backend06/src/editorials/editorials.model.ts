
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Editorial {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true, length: 9})
    cif: string;

    @Column()
    name: string;

    @CreateDateColumn({name: 'created_date'})
    createdDate: Date;

    @Column()
    foundationYear: number;    
}