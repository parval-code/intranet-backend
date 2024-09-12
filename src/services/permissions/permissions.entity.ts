import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
} from 'typeorm';

@Entity('Permisos')
export default class PermissionsEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'Id' })
    id: number;

  @Column({ name: 'CodePermisos', length: 100 })
  codePermission: string;

  @Column({ name: 'Descripcion', length: 250 })
  description: string;

  @Column({ name: 'FechadeCreacion' })
  createdAt: Date;

  @Column({ name: 'CreadoPor' })
  createdBy: string;

  @Column({ name: 'FechaActualizacion' })
  updatedAt: Date;

  @Column({ name: 'ActualizadoPor' })
  updatedBy: string;

}
