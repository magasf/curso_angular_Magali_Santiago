import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { Booking } from './bookings.model';

@Controller('bookings')
export class BookingsController {

    constructor(private bookingService: BookingsService) {}

    @Get('user/:userId')
    findAllByUserId(
        @Param("userId", ParseIntPipe) 
        userId: number): Promise<Booking[]> {
        return this.bookingService.findAllByUserId(userId);
    }

    @Post()
    async create(@Body() booking: Booking): Promise<Booking> {
        return await this.bookingService.create(booking);
    }

}
