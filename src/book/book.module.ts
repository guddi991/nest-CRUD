/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { BookService } from "src/book/book.service";
import { bookController } from "./book.controller";

@Module({
    imports: [],
    controllers: [bookController],
    providers: [BookService]
})

export class BookModule{}