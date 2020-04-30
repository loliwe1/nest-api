import { Controller, Get, Param, Body, Put, Post, Delete, UseGuards, ValidationPipe, Request, HttpException, HttpStatus, BadRequestException } from '@nestjs/common'
import { ColumnsService } from './column.service'
import { ColumnDto, UpdateColumnDto, CreateColumnDto, DeleteColumnDto } from './column.dto'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { request } from 'http'

@Controller('columns')
@UseGuards(JwtAuthGuard)
export class ColumnsController {
  constructor(private columnsService: ColumnsService) { }

  @Get()
  async findAll(): Promise<ColumnDto[]> {
    return this.columnsService.findAll()
  }

  @Put(':id')
  async update(@Request() req, @Body(new ValidationPipe()) updateColumnDto: UpdateColumnDto) {
    const userId = req.user.id
    const upd = await this.columnsService.update(updateColumnDto, userId)

    if (upd === null) {
      throw new BadRequestException
    }
  }

  @Post()
  async create(@Request() req, @Body(new ValidationPipe()) createColumnDto: CreateColumnDto) {
    const userId = req.user.id
    return this.columnsService.create({ ...createColumnDto, userId })
  }

  @Delete(':id')
  async delete(@Request() req, @Param() id: DeleteColumnDto) {
    const userId = req.user.id
    const del = await this.columnsService.delete({ id, userId })
    if (del === null) {
      throw new BadRequestException
    }
  }

}
