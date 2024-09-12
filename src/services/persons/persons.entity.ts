import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    ManyToOne,
    JoinColumn
} from 'typeorm';
import DepartmentsEntity from './../departments/departments.entity';
import LocationEntity from './../location/location.entity';

@Entity('Personas')
export default class PersonsEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
    id: number;

  @Column({ name: 'IdUsuario', length: 50 })
  userId: string;

  @Column({ name: 'UrlImagen', length: 250 })
  urlImage: string;

  @Column({ name: 'Correo' })
  email: string;

  @Column({ name: 'NombreEmpleados' })
  name: string;

  @Column({ name: 'Posicion' })
  jobTitle: string;

  // @Column({ name: 'Area' })
  // area: number;

  @ManyToOne(() => DepartmentsEntity, { eager: true })
  @JoinColumn({ name: 'Area', referencedColumnName: 'id' })
  area: DepartmentsEntity | any;

  @ManyToOne(() => LocationEntity, { eager: true })
  @JoinColumn({ name: 'Localidad', referencedColumnName: 'id' })
  location: LocationEntity | any;

  @Column({ name: 'Estatus', default: () => true})
  status: boolean;

  @Column({ name: 'FechaNacimiento'})
  birthdate: Date;

  @Column({ name: 'FechaIngreso'})
  admissionDate: Date;

  @Column({ name: 'FechaCreacion' })
  createdAt: Date;

  @Column({ name: 'CreadoPor' })
  createdBy: Date;

  @Column({ name: 'FechaActualizacion' })
  updatedAt: Date;

  @Column({ name: 'ActualizadoPor' })
  updatedBy: number;

}
