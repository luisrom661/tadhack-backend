//import { response, request } from 'express'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
//const prisma = new PrismaClient({ datasources: {  db: { url: process.env.FL0_DATABASE_URL } } });

export const getUsers = async () => {
    await prisma.user.create({
      data: {
        firstName: 'Alice',
        email: 'alice@prisma.io',
        posts: {
          create: { title: 'Hello World' },
        },
        profile: {
          create: { bio: 'I like turtles' },
        },
      },
    });

    const allUsers = await prisma.user.findMany({
      include: {
        posts: true,
        profile: true,
      },
    });
    console.dir(allUsers, { depth: null });
    console.log(allUsers);
}