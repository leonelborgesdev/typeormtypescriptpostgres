import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstname : string

    @Column()
    lastname : string

    @Column()
    active : boolean

    @CreateDateColumn()
    createAt: Date

    @UpdateDateColumn()
    updateAt: Date
}

