import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
    // Seed Categories
    const category1 = await prisma.category.create({
        data: {
            name: 'Electronics',
        },
    });

    const category2 = await prisma.category.create({
        data: {
            name: 'Clothing',
        },
    });

    // Seed Products
    const product1 = await prisma.product.create({
        data: {
            name: 'Laptop',
            description: 'High-performance laptop',
            quantity: 10,
            categories: {
                connect: {
                    id: category1.id,
                },
            },
        },
    });

    const product2 = await prisma.product.create({
        data: {
            name: 'T-Shirt',
            description: 'Cotton t-shirt',
            quantity: 50,
            categories: {
                connect: {
                    id: category2.id,
                },
            },
        },
    });

    console.log('Seed data inserted successfully');
}

seed()
    .catch((error) => {
        throw error;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
