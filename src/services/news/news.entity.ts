import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    ManyToOne,
    JoinColumn
} from 'typeorm';
import CategoriesNewsEntity from './../categoriesNews/categoriesNews.entity';

@Entity('Noticias')
export default class NewsEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
    id: number;

  @Column({ name: 'Titulo', length: 100 })
  title: string;

  @Column({ name: 'Portada' })
  frontPage: string;

  @Column({ name: 'Descripcion' })
  description: string;

  @ManyToOne(() => CategoriesNewsEntity, { eager: true })
  @JoinColumn({ name: 'CategoriaId', referencedColumnName: 'id' })
  category: CategoriesNewsEntity | any;

  @Column({ name: 'Contenido' })
  content: string;

  @Column({ name: 'CreadaPor' })
  createdBy: string;

  @Column({ name: 'ActualizadaPor' })
  updatedBy: string;

  @Column({ name: 'FechaCreacion' })
  createdAt: Date;

  @Column({ name: 'FechaActualizacion' })
  updatedAt: Date;

}
