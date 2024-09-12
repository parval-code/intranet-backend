import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
} from 'typeorm';

@Entity('MotivoAusencia')
export default class ReasonAbsenceEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'Id' })
    id: number;

  @Column({ name: 'Nombre', length: 50 })
  name: string;

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
