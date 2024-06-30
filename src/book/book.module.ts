/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { BookService } from "src/book/book.service";
import { bookController } from "./book.controller";
import { BookMiddleWare } from "./book.middleware";

@Module({
    imports: [],
    controllers: [bookController],
    providers: [BookService]
})

export class BookModule implements NestModule {

    configure(consumer: MiddlewareConsumer){
        consumer.apply(BookMiddleWare).forRoutes('book');
    }
}