/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { BookService } from "src/book/book.service";

@Module({
    imports: [],
    controllers: [],
    providers: [BookService]
})

export class BookModule{}