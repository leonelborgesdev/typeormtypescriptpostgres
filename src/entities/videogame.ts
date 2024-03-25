import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm"

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

    @Column()
    Rating : string

    @Column()
    Plataformas : string
    
    @CreateDateColumn()
    createAt: Date

    @UpdateDateColumn()
    updateAt: Date
}