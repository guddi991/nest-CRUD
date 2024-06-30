/* eslint-disable prettier/prettier */
import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class BookMiddleWare implements NestMiddleware{
    
    use(req : Request, res : Response, next: NextFunction){
        console.log("Class Based Middleware for book.")
        next();
    }
}