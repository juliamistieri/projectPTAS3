const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const express = require("express");
const app = express();

//Rotas

app.listen(8000);