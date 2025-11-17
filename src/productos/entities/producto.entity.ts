import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Categoria } from '../../categorias/entities/categoria.entity';
@Entity()
export class Producto {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    nombre: string;
    @Column()
    descripcion: string;
    @Column()
    foto: string;
    @Column('decimal')
    precio: number;
    @ManyToMany(() => Categoria, categoria => categoria.productos)
    @JoinTable({
        name: 'producto_categoria', 
        joinColumn: {
        name: 'producto_id',
        referencedColumnName: 'id',
    },
        inverseJoinColumn: {
        name: 'categoria_id',
        referencedColumnName: 'id',
    },
})
    categoria: Categoria[];

}
