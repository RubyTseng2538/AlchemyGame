const {Prisma, PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

async function createItem(data) {
    const item = await prisma.item.create({
      data: data
    });
    return item;
}

async function getItemById(id){
    const item = await prisma.item.findUnique({
        where:{
            id: id
           }
    });
    return item
}

async function getItemByType(type){
    const item = await prisma.item.findMany({
        where:{
            type: type
           }
    });
    return item
}

async function getItemsByUser(id){
    const items = await prisma.item.findMany({
        where:{
            userId: id
           }
    });
    return items
}

async function getItemsByRecipe(recipe){
    const items = await prisma.item.findMany({
        where:{
            recipe: recipe
           }
    });
    return items
}

async function updateItem(id, data){
    const item = await prisma.item.update({
        where:{
            id: id
        },
        data: data
    });
    return item
}

async function deleteItem(id){
    const item = await prisma.item.delete({
        where:{
            id: id
        }
    });
    return item
}

module.exports = {
    createItem,
    getItemById,
    getItemByType,
    getItemsByUser,
    getItemsByRecipe,
    updateItem,
    deleteItem
}