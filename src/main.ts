/* eslint-disable prettier/prettier */

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction, Request, Response } from 'express';

// global based functional middleware => works with every request.


function globalMiddleWareOne(req : Request, res : Response, next : NextFunction){
  console.log("global middleware 1 ")
  next();
}

// middleware2

function globalMiddleWareTwo(req : Request, res : Response, next : NextFunction){
  console.log("global middleware 2");
  next()
}


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalMiddleWareOne);
  app.use(globalMiddleWareTwo);
  await app.listen(3000);
}
bootstrap();
