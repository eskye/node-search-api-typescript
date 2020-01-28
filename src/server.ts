import http from 'http';
import express from 'express';
import { applyMiddleware, applyRoutes } from './utils';
import middleware from './middleware';
import routes from './services';
import errorHandlers from './middleware/errorHandlers';
process.on('uncaughtException', (e) =>{
  console.log(e);
  process.exit(1);
});
process.on('unhandledRejection', e => {
    console.log(e);
    process.exit(1);
});
const router = express();
applyMiddleware(middleware, router);
applyRoutes(routes, router);
applyMiddleware(errorHandlers, router);
const {port = 3000} = process.env;
const server = http.createServer(router);
server.listen(port, () =>
    console.log(`Server is running on  http://localhost:${port}...`)
);
/* 
const sum = (a:number, b: number) => a + b;

setInterval(() => console.log(sum(2, 4)), 2000); */