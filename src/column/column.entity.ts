import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Cards } from 'src/card/card.entity';
import { User } from 'src/users/user.entity';

@Entity()
export class Columns {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  userId: number;

}