import express from "express";

const app = express();

/**
 * GET => Buscar uma informação
 * POST => Inserir/Criar uma informação
 * PUT => Alterar uma informação
 * DELETE => Remover uma dado
 * PATCH => Alterar uma informação especifica
*/ 
app.get("/", (request, response) => {
  // Request => Entrando
  // Response => Saindo
  return response.send("Olá mundo!");
});

app.post("/", (request, response) => {
  return response.send("método POST");
});

//htt://localhost:3333
app.listen(3333, () => console.log("Server is running"));