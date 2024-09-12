import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
} from 'typeorm';

@Entity('Localidad')
export default class LocationEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'Id' })
    id: number;

  @Column({ name: 'Nombre' })
  name: string;

  @Column({ name: 'Descripcion' })
  description: string;

  @Column({ name: 'Numero'})
  phone: string;

  @Column({ name: 'Direccion'})
  address: string;

  @Column({ name: 'Horario'})
  schedule: string;

}
