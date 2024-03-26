import { BaseEntity, Column, CreateDateColumn, Double, Entity, JoinTable, ManyToMany, PrimaryColumn, UpdateDateColumn } from "typeorm"
import { genres } from "./genres"

@Entity()
export class videogame extends BaseEntity{
    
    @PrimaryColumn()
    id: string

    @Column()
    Nombre : string

    @Column()
    Image : string

    @Column()
    Descripción : string

    @Column()
    Fecha_lanzamiento : string

    @Column("float", { default : 0, nullable: false})
    Rating : number

    @Column()
    Plataformas : string
    
    @CreateDateColumn()
    createAt: Date

    @UpdateDateColumn()
    updateAt: Date

    @ManyToMany(() => genres, (genre) => genre.videogames)
    @JoinTable()
    genre: genres[]
}