import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  cardId: number;

  @Column()
  userId: number;

}