import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
} from 'typeorm';

@Entity('CategoriasNoticias')
export default class CategoriesNewsEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'Id' })
    id: number;

  @Column({ name: 'Nombre', length: 100 })
  name: string;

}
