import { Injectable } from '@nestjs/common';
import { MyService } from './my/my.service';

@Injectable()
export class AppService {
  constructor(private readonly myService: MyService) {}

  getHello(): string {
    return 'Hello World! ' + this.myService.name();
  }
}
