import { Column, Entity } from "typeorm";

@Entity()
class User{

    @Column
    id: number

    @Column
    firstname : string

    @Column
    lastname : string

    @Column
    active : boolean
}