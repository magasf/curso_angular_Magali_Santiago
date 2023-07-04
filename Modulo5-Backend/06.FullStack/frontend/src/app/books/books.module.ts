import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookGalleryComponent } from './book-gallery/book-gallery.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookFormComponent } from './book-form/book-form.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from "../shared/shared.module";
import { MatGridListModule } from '@angular/material/grid-list';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule }from '@angular/material/expansion';
@NgModule({
    declarations: [
        BookListComponent,
        BookGalleryComponent,
        BookDetailComponent,
        BookFormComponent
    ],
    imports: [
        CommonModule, BooksRoutingModule, HttpClientModule,
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        SharedModule,
        MatGridListModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatDatepickerModule,
        MatInputModule,
        MatNativeDateModule,
        MatListModule,
        MatChipsModule,
        MatSnackBarModule,
        MatExpansionModule
    ],
    providers: [
      { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }
    ],
})
export class BooksModule { }

