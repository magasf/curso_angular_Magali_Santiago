import { Body, Controller, Request,UseGuards, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { Booking } from './bookings.model';
import { AuthGuard } from '@nestjs/passport';
import { UserRole } from 'src/users/user-role.enum';

@Controller('bookings')
export class BookingsController {

    constructor(private bookingService: BookingsService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    findAll(@Request() request): Promise<Booking[]> {

        if(request.user.role === UserRole.ADMIN)
            return this.bookingService.findAll();

        return this.bookingService.findAllByUserId(request.user.id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(
        @Request() request, 
        @Body() booking: Booking): Promise<Booking> {
        console.log(request.user);
        booking.user = request.user;
        return await this.bookingService.create(booking);
    }

}
