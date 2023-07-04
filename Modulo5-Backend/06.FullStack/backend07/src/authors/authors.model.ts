import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Location } from "src/locations/locations.model";

@Entity()
export class Author {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50})
    name: string;

    @Column({length: 50})
    email: string;

    @Column({type: 'text'})
    bio: string;

    @Column()
    birthday: Date;

    @Column()
    photo: string;

    @CreateDateColumn({name: 'created_date'})
    createdDate: Date;

    @UpdateDateColumn({name: 'updated_date'})
    updatedDate: Date;

    // eager true carga de forma temprana la asociación, implica que location se carga en las consultas select de autor
    @OneToOne(() => Location, { cascade: true, eager: true }) // cuidado eager puede afectar al rendimiento
    @JoinColumn({name: 'id_location'}) // obligatorio
    location: Location;

}