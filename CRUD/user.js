const {Prisma, PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();


//create
async function createUser(data) {
    const user = await prisma.user.create({
      data: data
    });
    return user;
}

//read
async function getUserById(id){
    const user = await prisma.user.findUnique({
        where:{
            id: id
           }
    });
    return user
}

async function getUserByGoogleId(id){
    const user = await prisma.user.findUnique({
        where:{
            GoogleId: id
           }
    });
    return user
}

async function getUserByEmail(email){
    const user = await prisma.user.findUnique({
        where:{
            email: email
        }
    });
    return user;
}


//combine email and name contain
async function getUserByString(string){
    const users = await prisma.user.findMany({
        where:
            {OR: [{
                email: {
                    contains: string,
                    mode: 'insensitive'
                }
            },{
                name: {
                    contains: string,
                    mode: 'insensitive'
                }
            }
        ]}
    });
    return users
}

async function getAllUsers(){
    const users = await prisma.user.findMany();
    return users;
}


//update
async function updateUser(id, data){
    const user = await prisma.user.update({
        where:{
            id: id
        },
        data: data
    });
    return user;
}

async function addGold(id, gold){
    const user = await prisma.user.update({
        where:{
            id: id
        },
        data:{
            gold: {
                increment: gold
            }
        }
    });
    return user;
}

async function addPrism(id, prism){
    const user = await prisma.user.update({
        where:{
            id: id
        },
        data:{
            prism: {
                increment: prism
            }
        }
    });
    return user;
}

async function subtractGold(id, gold){
    const user = await prisma.user.update({
        where:{
            id: id
        },
        data:{
            gold: {
                decrement: gold
            }
        }
    });
    return user;
}

async function subtractPrism(id, prism){
    const user = await prisma.user.update({
        where:{
            id: id
        },
        data:{
            prism: {
                decrement: prism
            }
        }
    });
    return user;
}

//delete
async function deleteUser(id){
    const user = await prisma.user.delete({
        where:{
            id: id
        }
    })
}

module.exports = {
  createUser,
  getUserById,
  getUserByGoogleId,
  getUserByEmail,
  getUserByString,
  getAllUsers,
  updateUser,
  deleteUser,
  addGold,
  addPrism,
  subtractGold,
  subtractPrism
};