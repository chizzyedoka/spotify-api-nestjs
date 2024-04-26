import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  // local dB array
  private readonly songs = [];

  create(song: string) {
    this.songs.push(song);
    return song;
  }

  findAll() {
    return this.songs;
  }
}
