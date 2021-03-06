import { Module } from '@nestjs/common';
import { CardController } from './card.controller';
import { CardService } from './card.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cards } from './card.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cards])],
  controllers: [CardController],
  providers: [CardService],
  exports: [CardService]
})
export class CardModule { }
