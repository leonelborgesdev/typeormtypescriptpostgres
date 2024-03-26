import { BaseEntity, Column, CreateDateColumn, Double, Entity, JoinTable, ManyToMany, PrimaryColumn, UpdateDateColumn } from "typeorm"
import { genres } from "./genres"

@Entity()
export class videogame extends BaseEntity{
    
    @PrimaryColumn()
    id: string

    @Column()
    nombre : string

    @Column()
    image : string

    @Column()
    descripcion : string

    @Column()
    fecha_lanzamiento : string

    @Column("float", { default : 0, nullable: false})
    rating : number

    @Column()
    plataformas : string
    
    @CreateDateColumn()
    createAt: Date

    @UpdateDateColumn()
    updateAt: Date

    @ManyToMany(() => genres, (genre) => genre.videogames)
    @JoinTable()
    genres: genres[]
}