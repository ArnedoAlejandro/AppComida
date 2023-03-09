//2-Importamos prismaClient 
import { PrismaClient } from '@prisma/client'

//1- crfeamos funcion que nos tome dos parametros el reques y la respuesta
export default async function handler(req, res){
//3-Creamos constante que tome los valores de prisma client
    const prisma = new PrismaClient();

    // Obtener ordenes
    const ordenes = await prisma.orden.findMany({
        where:{
            estado: false
        }
    })
    res.status(200).json(ordenes)

    // Crear ordenes


//4- Creamos condicional que nos traiga el metodo post
    if(req.method === "POST"){
//5-Creamos constante creano nuestro objeto con los valores almacenados para llevarlos a la base de datos
        const orden = await prisma.orden.create({
            data : {
                nombre: req.body.nombre,
                total: req.body.total,
                pedido: req.body.pedido
            }
        })
//6-Imprimimos la orden 
        console.log(orden)
        res.status(200).json(orden);
       
    }
}