import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

/*
    id
    titulo
    descripcion
    decorador
    foto
    tipo
*/

@Entity('combo')
export class Combo extends BaseEntity {
    @PrimaryGeneratedColumn({})
    id: number;
    @Column({ type: String })
    titulo;
    @Column({ type: String })
    descripcion;
    @Column({ type: String })
    decorador;
    @Column({ type: String })
    foto;
    @Column({ type: String })
    tipo;
}