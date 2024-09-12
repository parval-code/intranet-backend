import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Base App Entity to inherit the basic fields such as: id, created_at and updated_at
 */
export default class AppEntity extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;
  @Column({ name: 'created_at' }) createdAt: Date;
  @Column({ name: 'updated_at' }) updatedAt: Date;
}
