import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class genres extends BaseEntity{

    @PrimaryColumn()
    id: string

    @Column()
    name: string
}