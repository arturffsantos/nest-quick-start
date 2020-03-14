import { Injectable } from '@nestjs/common';

@Injectable()
export class MyService {
  name() {
    return 'Nest intro';
  }
}
