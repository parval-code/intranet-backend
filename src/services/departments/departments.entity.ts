import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
} from 'typeorm';

@Entity('Departamentos')
export default class DepartmentsEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
    id: number;

  @Column({ name: 'Nombre' })
  name: string;

  @Column({ name: 'Descripcion' })
  description: string;

  @Column({ name: 'Encargado' })
  manager: string;

}
