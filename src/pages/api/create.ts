import { prisma } from 'lib/prisma';

export default async function handler(req, res) {
  const { feedbackType, message, email, name } = req.body;

  try {
    const feedback = await prisma.feedback.create({
      data: {
        message,
        feedbackType,
        name,
        email,
      },
    });
    res.status(200).json(feedback);
  } catch (error) {
    res.status(400).json({
      message: `Something went wrong :/ ${error}`,
    });
  }
}