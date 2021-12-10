import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.feedback.createMany({
    data: [
      {
        message: 'Lovely app',
        feedbackType: 'FEEDBACK',
        email: 'mahmoud@prisma.io',
        name: 'Mahmoud',
      },
      {
        message: 'Add dark mode',
        feedbackType: 'IDEA',
        email: 'dan@prisma.io',
        name: 'Dan',
      },
      {
        message: 'layout is broken on mobile',
        feedbackType: 'ISSUE',
        email: 'alex@prisma.io',
        name: 'Alex',
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect);