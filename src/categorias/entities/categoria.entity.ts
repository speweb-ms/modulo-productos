import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Producto } from '../../productos/entities/producto.entity';
@Entity()
export class Categoria {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({length: 100})
    nombre: string;
    
    @Column({length: 255})
    descripcion: string;

    @Column({length: 255})
    foto: string;
    @ManyToMany(() => Producto, producto => producto.categoria)
    productos: Producto[];
}
