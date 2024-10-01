import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  VersionColumn
} from 'typeorm';

@Entity('SistemaArchivo')
export default class FileSystemDepartmentsEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'Archivo', type: 'varchar', transformer: {
    to(value: any): any {
      return JSON.stringify(value);
    },
    from(value: any): any {
      return JSON.parse(value);
    },
  }})
  fileSystem: any;

  @Column({ name: 'FechaCreacion', type: 'datetime' })
  createdAt: Date;

  @Column({ name: 'ActualizadoPor', type: 'nvarchar' })
  updatedBy: string;

  @Column({ name: 'FechaActualizacion', type: 'datetime' })
  updatedAt: Date;

  @VersionColumn({ name: 'Version' })
  version: number;
}
