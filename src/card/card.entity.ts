import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Comment } from 'src/comment/comment.entity';

@Entity()
export class Cards {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ default: "" })
  description: string;

  @Column()
  columnId: number;

  @Column()
  userId: number;


}