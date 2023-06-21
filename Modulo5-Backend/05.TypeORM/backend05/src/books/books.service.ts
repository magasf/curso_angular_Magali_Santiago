import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './books.model';
import { Between, ILike, MoreThan, MoreThanOrEqual, Repository } from 'typeorm';

@Injectable()
export class BooksService {

    constructor(
        @InjectRepository(Book) private bookRepo: Repository<Book>
    ){}

    findAll(): Promise<Book[]> {
        // SELECT * FROM books;
        return this.bookRepo.find();
    }

    findById(id: number): Promise<Book | null> {
        // SELECT * FROM books WHERE id = 1;
        console.log(id);
        return this.bookRepo.findOne({ 
            where: {
                id: id
            }
         });
    }

    findAllByTitleEquals(title: string): Promise<Book[]> {
        console.log(title);
        return this.bookRepo.find({
            where: {
                title: title // coincidencia exacta
            }
        });
    }

    findAllByTitleLike(title: string): Promise<Book[]> {
        console.log(title);
        return this.bookRepo.find({
            where: {
                title: ILike(`%${title}%`) // contenga una palabra
            }
        });
    }

    findAllByPriceBetween(minPrice: number, maxPrice: number): Promise<Book[]> {
        console.log(minPrice);
        console.log(maxPrice);

        return this.bookRepo.find({ 
            where: {
                price: Between(minPrice, maxPrice)
            }
        });
    }

    findAllByPublishedTrue(): Promise<Book[]> {
        return this.bookRepo.find({
            where: {
                published: true
            }
        });
    }

    findAllByQuantityAndPrice(quantity: number, 
                              price: number): Promise<Book[]> {
            return this.bookRepo.find({
                where: {
                    quantity: MoreThanOrEqual(quantity),
                    price: MoreThanOrEqual(price)
                }
            });
    }

    // findAllOrderByPriceAsc
    findAllOrderByPriceAsc(): Promise<Book[]> {
        return this.bookRepo.find({
            order: {
                price: "ASC"
            }
        });
    }


     // create
    async create(book: Book): Promise<Book>{
        try{
           return await this.bookRepo.save(book);
        }catch (error){
            console.log('FALLISIMO')
            console.log(error.message);
            throw new ConflictException('No se ha podido guardar el libro')
        }
        
     }

    // update
    async update(book: Book){
       let bookFromDB = await this.bookRepo.findOne({
            where: {
                id: book.id
            }
        })
        if(!bookFromDB) throw new NotFoundException('Libro no encontrado');
        try{
            bookFromDB.price = book.price;
            bookFromDB.published = book.published;
            bookFromDB.quantity = book.quantity;
            bookFromDB.title = book.title;

           await this.bookRepo.update(bookFromDB.id, bookFromDB);
            
            return bookFromDB;
        }catch (error){
            throw new ConflictException('Error actulizando el libro')

        }
    }

    async deleteById(id: number){
        let exist = await this.bookRepo.exist({
            where:{
                id: id

            }
        });
        if(!exist) throw new NotFoundException('Not Found');

        try{
            await this.bookRepo.delete(id);
        } catch(error){
            throw new ConflictException('No se puede borrar')
        }
    }

    // deleteById




}
