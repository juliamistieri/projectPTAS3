const prisma = require("./prisma/prismaClient");
const cors = require('cors')

const express = require("express")

const app =  express();
app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(express.json());

app.use(express.urlencoded({ extended: true}));

const authRoutes = require("./routes/AuthRoutes");
app.use("/auth", authRoutes);

app.get('/', (req, res) => {
    console.log('pagina raiz')
})

app.listen(8000)