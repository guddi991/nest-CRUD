/* eslint-disable prettier/prettier */

import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./data/book.dto"

@Controller("book")
export class bookController{

    constructor(private bookServie : BookService){

    }

    @Get("/findAll")
    getAllBooks() : Book[]{
        return this.bookServie.findAllBooks();
    }

    @Put('/update')
    updateBook(@Body() book : Book) : string{
        return this.bookServie.updateBookService(book)
    }

    @Delete('/delete/:id')
    deleteBook(@Param("id") BookId : string) : string{
        return this.bookServie.deleteBookService(BookId)
    }

    @Post('/add')
    addBook(@Body() book : Book) : string{
        return this.bookServie.addBookService(book)
    }
}
