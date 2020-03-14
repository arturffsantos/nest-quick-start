import {
  Controller,
  Get,
  Param,
  Post,
  Req,
  Request,
  Put,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Category } from './category.model';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('categories')
export class CategoryController {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,
  ) {}

  @Get()
  async index() {
    return this.categoryRepo.find();
  }

  @Get(':id')
  async show(@Param('id') id: number) {
    return this.categoryRepo.findOne(id);
  }

  @Post()
  async store(@Req() request: Request) {
    const category = this.categoryRepo.create(request.body as any);
    return this.categoryRepo.save(category);
  }

  @Put(':id')
  async update(@Req() request: Request, @Param('id') id: number) {
    await this.categoryRepo.update(id, request.body as any);
    return this.categoryRepo.findOne(id);
  }

  @Delete(':id')
  @HttpCode(204)
  async destroy(@Param('id') id: number) {
    return this.categoryRepo.delete(id);
  }
}
