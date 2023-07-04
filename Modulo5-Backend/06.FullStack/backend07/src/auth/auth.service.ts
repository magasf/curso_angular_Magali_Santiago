import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { LoginDTO } from './dto/login.dto';
import { TokenDTO } from './dto/token.dto';



@Injectable()
export class AuthService {

    constructor(
        private userService: UsersService,
        private jwtService: JwtService
        ){}

    
    async login(login: LoginDTO): Promise<TokenDTO> {

        let user = await this.userService.findByEmail(login.email);

        if(!user) 
            throw new UnauthorizedException('Credenciales incorrectas'); // 401

        if(user.password !== login.password) 
            throw new UnauthorizedException('Credenciales incorrectas'); // 401

        
        let payload = {
            email: user.email,
            sub: user.id
        }

        let token: TokenDTO = {
            token: await this.jwtService.signAsync(payload)
        }

        return token;

    }
}
