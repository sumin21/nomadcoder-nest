import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
    @Get()
    home(){
        return 'Welcone to my Movie API';
    }
}
