import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    ManyToOne,
    JoinColumn,
    OneToOne
} from 'typeorm';
import ReasonAbsenceEntity from './../reasonAbsence/reasonAbsence.entity';
import PersonsEntity from './../persons/persons.entity';

@Entity('Vacaciones')
export default class VacationsEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'Id' })
    id: number;

  @Column({ name: 'IdUsuario', length: 50 })
  userId: string;

  @ManyToOne(() => ReasonAbsenceEntity)
  @JoinColumn({ name: 'IdMotivo', referencedColumnName: 'id' })
  reasonAbsence: ReasonAbsenceEntity | any;

  @Column({ name: 'IdDepartamento' })
  department: number;

  @Column({ name: 'Desde' })
  dateStart: Date;

  @Column({ name: 'Hasta' })
  dateEnd: Date;

  @Column({ name: 'CantidadDias' })
  quantityDay: number;

  @Column({ name: 'AnoVacaciones' })
  year: number;

  @Column({ name: 'Aprobacion', default: () => false })
  approved: boolean;

  @Column({ name: 'IdSupervisor', length: 75 })
  supervisorId: string;

  @Column({ name: 'ComentarioSupervisor', length: 250 })
  commentSupervisor: string;

  @Column({ name: 'FechaAprobacion' })
  approvedDate: Date;

  @Column({ name: 'AprobacionRRHH', default: () => false})
  approvedRRHH: boolean;

  @Column({ name: 'IdRecursosHumano', length: 50 })
  humanResourcesId: string;

  @Column({ name: 'FechaAprobacionRRHH' })
  approvedDateRRHH: Date;

  @Column({ name: 'ComentarioRRHH', length: 250 })
  commentRRHH: string;

  @Column({ name: 'FechaCreacion' })
  createdAt: Date;

  @Column({ name: 'FechaActualizacion' })
  updatedAt: Date;

  @Column({ name: 'ActualizadoPor' })
  updatedBy: string;

  @OneToOne(() => PersonsEntity, person => person.userId, { eager: true })
  @JoinColumn({ name: 'IdUsuario', referencedColumnName: 'userId' })
  personInfo: PersonsEntity | null;

}
