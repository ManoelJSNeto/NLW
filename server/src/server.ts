import fastify from "fastify";
import {PrismaClient} from '@prisma/client';
import cors from '@fastify/cors';

const app = fastify()
const prisma = new PrismaClient()

// Método HTTP: Get, Post, Put, Patch, Delete 

app.register(cors)

app.get('/', async () => {
    const habits = await prisma.habit.findMany()
    return habits
})

app.listen({
    port:3333,
}).then(() => {
    console.log("HTTP Server running!")
})