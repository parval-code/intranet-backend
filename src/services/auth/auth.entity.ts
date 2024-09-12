import { BaseEntity, Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';
import PersonsEntity from '../persons/persons.entity';

@Entity()
export default class AuthEntity extends  BaseEntity {

  @PrimaryColumn() id: number;

  @Column() username: string;

  @Column() password: string;

  @Column() token: string;

  @OneToOne(() => PersonsEntity) user: PersonsEntity;

}
