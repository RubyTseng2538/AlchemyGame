const {Prisma, PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

async function createGemling(data) {
    const gemling = await prisma.gemling.create({
      data: data
    });
    return gemling;
}

async function getGemlingById(id){
    const gemling = await prisma.gemling.findUnique({
        where:{
            id: id
           }
    });
    return gemling
}

async function getGemlingByFamily(family){
    const gemling = await prisma.gemling.findMany({
        where:{
            family: family
           }
    });
    return gemling
}

async function getGemlingByRarity(rarity){
    const gemling = await prisma.gemling.findMany({
        where:{
            rarity: rarity
           }
    });
    return gemling
}

async function getGemlingByGem(gem){
    const gemling = await prisma.gemling.findMany({
        where:{
            gem: gem
           }
    });
    return gemling
}

async function getGemlingByRace(race){
    const gemling = await prisma.gemling.findMany({
        where:{
            race: race
           }
    });
    return gemling
}   

async function getGemlingOwner(id){
    const user = await prisma.gemling.findUnique({
        where:{
            id: id
           }
    }).user();
    return user
}

async function getGemlingsByUser(id){
    const gemlings = await prisma.user.findUnique({
        where:{
            id: id
           }
    }).gemlings();
    return gemlings
}

async function updateGemlings(id, data){
    const gemling = await prisma.gemling.update({
        where:{
            id: id
        },
        data: data
    });
    return gemling
}


module.exports = {
    createGemling,
    getGemlingById,
    getGemlingByFamily,
    getGemlingByRarity,
    getGemlingByGem,
    getGemlingByRace,
    getGemlingOwner,
    getGemlingsByUser
}
