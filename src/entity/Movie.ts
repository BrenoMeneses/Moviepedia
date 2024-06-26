import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Movie {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    categories: string

}
