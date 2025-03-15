const {Prisma, PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

async function createRecipe(data) {
    const recipe = await prisma.recipe.create({
      data: data
    });
    return recipe;
}

async function getRecipeById(id){
    const recipe = await prisma.recipe.findUnique({
        where:{
            id: id
           }
    });
    return recipe
}

async function getRecipeByIngredients(ingredients){
    const recipe = await prisma.recipe.findMany({
        where:{
            ingredients: ingredients
           }
    });
    return recipe
}

async function updateRecipe(id, data){
    const recipe = await prisma.recipe.update({
        where:{
            id: id
        },
        data: data
    });
    return recipe
}

async function deleteRecipe(id){
    const recipe = await prisma.recipe.delete({
        where:{
            id: id
        }
    });
    return recipe
}

module.exports = {
    createRecipe,
    getRecipeById,
    getRecipeByIngredients,
    updateRecipe,
    deleteRecipe
}