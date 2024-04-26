import { Controller, Get, Put, Delete, Post } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songService: SongsService) {}
  @Get()
  findAll() {
    return this.songService.findAll();
  }

  @Get(':id')
  findOne() {
    return 'fetch song based on id';
  }

  @Post()
  create() {
    return this.songService.create('if I were a boy by Beyonce');
  }

  @Put(':id')
  update() {
    return 'update song based on the id';
  }

  @Delete(':id')
  delete() {
    return 'delete song based on id';
  }
}
