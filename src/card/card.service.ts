import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cards } from './card.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Cards)
    private cardsRepository: Repository<Cards>
  ) { }

  async findAll(): Promise<Cards[]> {
    return this.cardsRepository.find()
  }

  async update(card, userId): Promise<any> {
    const { id } = card
    const cardDb = await this.cardsRepository.findOne(id)

    if (cardDb && (cardDb.userId === userId)) {
      return this.cardsRepository.update(id, card)
    } else {
      return null
    }
  }

  create(card): void {
    this.cardsRepository.save(card)
  }

  async delete(id, userId): Promise<void> {
    const card = await this.cardsRepository.findOne(id)

    if (card && (card.userId === userId)) {
      this.cardsRepository.delete(id)
    } else {
      return null
    }
  }

}
