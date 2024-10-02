const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

async function main() {
    //insert de usuário
    const novoUsuario = await prisma.usuario.create({
        data: {
            nome: "Mistieri",
            email: "mistieri@gmail.com"
        }
    });

    console.log("Novo suário: " + JSON.stringify
        (novoUsuario));
}

main();