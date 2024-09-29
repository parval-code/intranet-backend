import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
} from 'typeorm';

@Entity('GruposAsignadosUsuarios')
export default class AssignedUserGroupsEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'IdGrupoAsignadoUsuario' })
    id: number;

  @Column({ name: 'Grupos', type: 'varchar', transformer: {
    to(value: any): any {
      return JSON.stringify(value);
    },
    from(value: any): any {
      return JSON.parse(value);
    },
  }})
  group: any;

  @Column({ name: 'IdUsuario', length: 50 })
  userId: string;

}
