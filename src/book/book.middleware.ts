/* eslint-disable prettier/prettier */
import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class BookMiddleWare implements NestMiddleware{
    
    use(req : Request, res : Response, next: NextFunction){
        let protocol = req.protocol; // http https
        let host = req.get('host') // localhost
        let url = req.originalUrl;
        let method = req.method;
        let date = new Date().toDateString();

        console.log(protocol + "://"+host+url+" "+method+ date)
        console.log("Class Based Middleware for book.")
        next();
    }
}
