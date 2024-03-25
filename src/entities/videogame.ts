import { BaseEntity, Column, CreateDateColumn, Double, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm"

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
}