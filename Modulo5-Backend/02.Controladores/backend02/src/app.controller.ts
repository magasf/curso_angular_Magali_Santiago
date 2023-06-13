import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('Hello2')
  getHello2(): string{
    return 'Hola desde nestjs';
  }
  @Get('Hello3')
  getHello3(): string{
    return 'Hola3 desde nestjs';
  }
  @Get('Hello4')
  getHello4(): number{
    return 100;
  }
  @Get('Hello5')
  getHello5(): any{
    return {
      id: 1,
      fullName: 'HelloMan',
      age: 25,
    }
  }
  @Get('Hello6')
  getHello6(): any{
    return[
      {
       id: 1,
       fullName: 'HelloWoman',
       age: 25,
     },
     {
      id: 2,
      fullName: 'HelloMan',
      age: 25,
    },
    {
     id: 3,
     fullName: 'HelloMachine',
     age: 25,
   }



    ];
  }
  //Url con parametros:
  //http://localhost:300/hello/1
  //http://localhost:300/hello/2
  @Get('hello/:id')
  getHelloById(@Param('id') id: string): any{
    console.log(id);
    return{
      id: id,
      fullName: 'Hello',
    };

  }
  //Url con dos parametros
  @Get('first-name/:firstName/last-name/:lastName')
  getFullName(@Param('firstName') firstName: string, @Param('lastName') lastName: string): any{
    
    console.log(firstName);
    console.log(lastName);
    return{
      fullName: `${firstName} ${lastName}`,
    };

  }
}
