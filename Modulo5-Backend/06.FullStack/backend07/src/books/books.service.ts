/* eslint-disable */
import { ConflictException, Delete, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './books.model';
import { Between, ILike, In, MoreThan, MoreThanOrEqual, Repository } from 'typeorm';
import { CategoriesService } from 'src/categories/categories.service';

@Injectable()
export class BooksService {

    constructor(
        @InjectRepository(Book) private bookRepo: Repository<Book>,
        private categoryService: CategoriesService
    ){}

    findAll(): Promise<Book[]> {
        // SELECT * FROM books;
        return this.bookRepo.find();
    }

    findAllWithRelations(): Promise<Book[]> {
        return this.bookRepo.find({
            relations: {
                author: true,
                editorial: true,
                categories: true
            }
        });
    }

    // Una proyección consiste en extraer campos concretos
    findAllProjections(): Promise<Book[]> {
        return this.bookRepo.find({
            select: {
                id: true,
                isbn: true,
                price: true,
                author: {
                    id: true,
                    name: true
                }
            },
            relations: {
                author: true
            }
        });
    }

    findAllByAuthorId(authorId: number): Promise<Book[]> {
        return this.bookRepo.find({
            relations: {
                author: true
            },
            where: {
                author: {
                    id: authorId
                }
            }
        });
    }

    // lo mismo para findAllByEditorialId

    findById(id: number): Promise<Book | null> {
        // SELECT * FROM books WHERE id = 1;
        console.log(id);
        return this.bookRepo.findOne({ 
            where: {
                id: id
            },
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

    async create(book: Book): Promise<Book> {
        try {
            return await this.bookRepo.save(book);
        } catch (error) {
            console.log(error.message);
            throw new ConflictException('No se ha podido guardar el libro.');
        }
    }


    async update(book: Book): Promise<Book> {
        let bookFromDB = await this.bookRepo.findOne({ 
            where: {
                id: book.id
            }
         });

         if(!bookFromDB) throw new NotFoundException('Libro no encontrado');

         try {
            console.log(book);
            bookFromDB.price = book.price;
            bookFromDB.published = book.published;
            bookFromDB.quantity = book.quantity;
            bookFromDB.title = book.title;
            bookFromDB.author = book.author;
            bookFromDB.editorial = book.editorial;

            
            // Opción 1: buscar las categorías
            // let categoryIds = book.categories.map(cat => cat.id);
            // let categories = await this.categoryService.findAllByIds(categoryIds);
            // bookFromDB.categories = categories;

            // Opción 2: cargar las categorías directamente
            bookFromDB.categories = book.categories;
            return await this.bookRepo.save(bookFromDB);

         } catch (error) {
            console.log(error);
            throw new ConflictException('Error actualizando el libro');
         }
    }


    async deleteById(id: number): Promise<void> {

        let exist = await this.bookRepo.exist({
            where: {
                id: id
            }
        });

        if(!exist) throw new NotFoundException('Not found');

        try {
            await this.bookRepo.delete(id);
        } catch (error) {
            throw new ConflictException('No se puede borrar')
        }

    }

    async deleteAllByAuthorId(authorId: number) {

        // Opcion 1
        // let books = await this.bookRepo.find({
        //     select: {
        //         id: true            
        //     },
        //     relations: {
        //         author: false
        //     },
        //     where: {
        //         author: {
        //             id: authorId
        //         }
        //     }
        // });
        // let ids = books.map(book => book.id)
        // await this.bookRepo.delete(ids);

        // Opcion 2: una sola sentencia sql
        await this.bookRepo.delete({
            author: {
                id: authorId
            }
        });


    }




}
