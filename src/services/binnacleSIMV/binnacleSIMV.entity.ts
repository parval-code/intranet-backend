import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BaseEntity,
} from 'typeorm';

@Entity('BitacoraSIMV')
export default class BinnacleSIMVEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'Id' }) id: number;

  @Column({ name: 'TipoDocumento' }) documentType: string;

  @Column({ name: 'Departamento' }) department: string;

  @Column({ name: 'CreadoPor' }) createdBy: string;

  @CreateDateColumn({ name: 'FechaCreacion', default: () => 'CURRENT_TIMESTAMP' }) createdAt: Date;

  @Column({ name: 'Requerimiento', length: 500 }) requirements: string;

  @Column({ name: 'FechaDocumento' }) dateSend: string;

  @Column({ name: 'Estado', default: () => false}) status: boolean;

}
