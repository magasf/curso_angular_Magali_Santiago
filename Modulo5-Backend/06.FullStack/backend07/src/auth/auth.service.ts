import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { LoginDTO } from './dto/login.dto';
import { TokenDTO } from './dto/token.dto';
import { User } from 'src/users/users.model';
import * as bcrypt from 'bcrypt';
import { RegisterDTO } from './dto/register.dto';
import { UserRole } from 'src/users/user-role.enum';

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

        // comprobar contraseña cifrada:
        if(! bcrypt.compareSync(login.password, user.password)) 
            throw new UnauthorizedException('Credenciales incorrectas'); // 401

        let payload = {
            email: user.email,
            sub: user.id,
            role: user.role
        }

        let token: TokenDTO = {
            token: await this.jwtService.signAsync(payload)
        }

        return token;

    }

    async register(register: RegisterDTO): Promise<TokenDTO> {

        let loginDTO: LoginDTO = {
            email: register.email,
            password: register.password // contraseña original
        }

        //Crear Usuario
        let user = new User();
        user.username = register.username;
        user.email = register.email;
        user.password = bcrypt.hashSync(register.password, 10)//contrasena cifrada
        
        user.role = register.isOwner? UserRole.OWNER : UserRole.USER;//asignar role en funcion de isOwner

    
        //Comprobar role


        await this.userService.create(user);

        return await this.login(loginDTO);
    }
}
