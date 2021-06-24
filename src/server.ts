import "reflect-metadata";
import express from "express";

import { router } from "./routes";

import "./database";

const app = express();

/**
 * GET => Buscar uma informação
 * POST => Inserir/Criar uma informação
 * PUT => Alterar uma informação
 * DELETE => Remover uma dado
 * PATCH => Alterar uma informação especifica
*/ 

/**
 * Tipos de parâmetros
 * Routes Params => http://localhost:3333/produtos/78347583458354 exemplo /test/{id}
 * Query Params => http://localhost:3333/produtos?name=teclado&description=tecladobon&
 * 
 * Body Params => {
 *  "name": "teclado",
 *  "description": "teclado bom"
 * }
 *  */ 

app.use(express.json());
app.use(router);

app.get("/test", (request, response) => {
  // Request => Entrando
  // Response => Saindo
  return response.send("Olá mundo!");
});

app.post("/", (request, response) => {
  return response.send("método POST");
});

//htt://localhost:3333
app.listen(3333, () => console.log("Server is running"));