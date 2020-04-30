import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './comment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentsRepository: Repository<Comment>
  ) { }

  async findAll(): Promise<Comment[]> {
    return this.commentsRepository.find()
  }

  async update(comment, userId): Promise<any> {
    const { id } = comment
    const commentDb = await this.commentsRepository.findOne(id)

    if (commentDb && (commentDb.userId === userId)) {
      return this.commentsRepository.update(id, comment)
    } else {
      return null
    }
  }

  create(comment): void {
    this.commentsRepository.save(comment)
  }

  async delete(id, userId): Promise<void> {
    const comment = await this.commentsRepository.findOne(id)

    if (comment && (comment.userId === userId)) {
      this.commentsRepository.delete(id)
    } else {
      return null
    }

  }
}

