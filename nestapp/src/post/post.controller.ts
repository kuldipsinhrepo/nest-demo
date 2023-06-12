import { Controller, Get } from '@nestjs/common';

@Controller('post')
export class PostController {
    @Get()
    getpost1(){
        return [{'name':'kuldip'}]
    }
    @Get('/post2')
    getpost2(){
        return [{'name':'kuldip111'}]
    }
}
