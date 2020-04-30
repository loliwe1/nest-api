import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColumnsController } from './column.controller'
import { ColumnsService } from './column.service'
import { Columns } from './column.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Columns])],
  controllers: [ColumnsController],
  providers: [ColumnsService],
})

export class ColumnsModule { }

