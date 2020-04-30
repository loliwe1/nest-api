import { Controller, Get, Put, Post, Delete, Body, Param, ValidationPipe, UseGuards, Request, BadRequestException } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentDto, UpdateCommentDto, CreateCommentDto } from './comment.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { DeleteCardDto } from 'src/card/card.dto';

@Controller('comments')
@UseGuards(JwtAuthGuard)
export class CommentController {
  constructor(private commentService: CommentService) { }

  @Get()
  async findAll(): Promise<CommentDto[]> {
    return this.commentService.findAll()
  }

  @Put(':id')
  async update(@Request() req, @Body(new ValidationPipe()) updateCommentDto: UpdateCommentDto) {
    const userId = req.user.id
    const upd = await this.commentService.update(updateCommentDto, userId)

    if (upd === null) {
      throw new BadRequestException
    }
  }

  @Post()
  async create(@Request() req, @Body(new ValidationPipe()) createCommentDto: CreateCommentDto) {
    const userId = req.user.id
    return this.commentService.create({ ...createCommentDto, userId })
  }

  @Delete(':id')
  async delete(@Request() req, @Param("id") id: DeleteCardDto) {
    const userId = req.user.id
    const del = await this.commentService.delete(id, userId)

    if (del === null) {
      throw new BadRequestException
    }
  }
}
