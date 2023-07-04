import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/login.dto';
import { TokenDTO } from './dto/token.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('login')
    async login(@Body() login: LoginDTO): Promise<TokenDTO> {
        console.log(login);
        return this.authService.login(login);
    }

}
