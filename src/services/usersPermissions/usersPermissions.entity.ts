import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
} from 'typeorm';

@Entity('PermisosUsuarios')
export default class UsersPermissionsEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
    id: number;

  @Column({ name: 'idUsuario', length: 50 })
  userId: string;

  @Column({ name: 'PermisosUsuario', type: 'varchar', transformer: {
    to(value: any): any {
      return JSON.stringify(value);
    },
    from(value: any): any {
      return JSON.parse(value);
    },
  }})
  permissions: any;

  @Column({ name: 'FechadeCreacion' })
  createdAt: Date;

  @Column({ name: 'CreadoPor' })
  createdBy: string;

  @Column({ name: 'FechaActualizacion' })
  updatedAt: Date;

  @Column({ name: 'ActualizadoPor' })
  updatedBy: string;

}
