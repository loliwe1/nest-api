import { Injectable, BadRequestException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ColumnDto } from './column.dto'
import { Columns } from './column.entity'

@Injectable()
export class ColumnsService {
  constructor(
    @InjectRepository(Columns)
    private columnRepository: Repository<Columns>,
  ) { }

  async findAll(): Promise<ColumnDto[]> {
    return this.columnRepository.find();
  }

  async update(column, userId): Promise<any> {
    const { id } = column
    const columnDb = await this.columnRepository.findOne(id)

    if (columnDb && (columnDb.userId === userId)) {
      await this.columnRepository.update(id, column)
    } else {
      return null
    }
  }

  create(column): void {
    this.columnRepository.save(column)
  }

  async delete({ id, userId }) {
    const column = await this.columnRepository.findOne(id)
    if (column && (column.userId === userId)) {
      this.columnRepository.delete(id);
    } else {
      return null
    }

  }
}


