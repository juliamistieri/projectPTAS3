const prisma = require("./prisma/prismaClient");
const cors = require('cors')

const express = require("express")

const app =  express();
app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(express.json());

app.use(express.urlencoded({ extended: true}));

const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);
