import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
} from 'typeorm';

@Entity('Grupos')
export default class GroupsEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'IdGrupo' })
    id: number;

  @Column({ name: 'Nombre', length: 150 })
  name: string;

}
