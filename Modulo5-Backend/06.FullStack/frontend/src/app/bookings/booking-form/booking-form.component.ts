import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../booking.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IBooking } from '../booking.model';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {

  bookingForm = new FormGroup({
    id: new FormControl<number>(0),
    price: new FormControl<number>(0, [
      Validators.required, Validators.min(5), Validators.max(500), Validators.pattern("^[0-9]+([.,][0-9]{1,2})?$")
    ]),
    startDate: new FormControl<Date>(new Date()),
    finishDate: new FormControl<Date>(new Date()),
  });
  bookId: number | undefined;

  constructor(
    private bookingService: BookingService,
    private activatedRoute: ActivatedRoute,
    private router: Router,

  ){}

  ngOnInit(): void {
    // Extraer id de book de la url para poder enviarlo luego a backend para crear una reserva asociada a ese book
    this.activatedRoute.params.subscribe(params => {
      const idString = params['bookId'];
      if (!idString) return;
      this.bookId = parseInt(idString, 10);
    });
  }

  save(): void {
    let id = this.bookingForm.get('id')?.value ?? 0;
    let price = this.bookingForm.get('price')?.value ?? 5;
    let startDate = this.bookingForm.get('startDate')?.value ?? new Date();
    let finishDate = this.bookingForm.get('finishDate')?.value ?? new Date();

    let booking: IBooking = {
      id: id,
      price: price,
      startDate: startDate,
      finishDate: finishDate,
      book: {
        id: this.bookId,
      }
    }

    if (id === 0)
      this.bookingService.create(booking)
      .subscribe(booking => this.router.navigate(['/bookings']));
    else
      this.bookingService.update(booking)
      .subscribe(booking => this.router.navigate(['/bookings']));
  }


}
