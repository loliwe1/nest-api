import { Controller, Get, Put, Post, Delete, Body, Param, UseGuards, ValidationPipe, Request, BadRequestException } from '@nestjs/common';
import { CardService } from './card.service';
import { UpdateCardDto, CreateCardDto, DeleteCardDto, CardDto } from './card.dto'
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('cards')
@UseGuards(JwtAuthGuard)
export class CardController {
  constructor(private cardService: CardService) { }

  @Get()
  async findAll(): Promise<CardDto[]> {
    return this.cardService.findAll()
  }

  @Put(':id')
  async update(@Request() req, @Body(new ValidationPipe()) updateCardDto: UpdateCardDto) {
    const userId = req.user.id
    const upd = await this.cardService.update(updateCardDto, userId)
    if (upd === null) {
      throw new BadRequestException
    }
  }

  @Post()
  async create(@Request() req, @Body(new ValidationPipe()) createCardDto: CreateCardDto) {
    const userId = req.user.id
    return this.cardService.create({ ...createCardDto, userId })
  }

  @Delete(':id')
  async delete(@Request() req, @Param() id: DeleteCardDto) {
    const userId = req.user.id
    this.cardService.delete(id, userId)

  }

}
