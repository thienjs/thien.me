import React from 'react';
import { prisma } from 'lib/prisma';
import Link from 'next/link';

const SingleFeedback = ({ feedbackItem }) => {
  return (
    <div className="prose prose-blue text-white mx-auto h-screen">
      <Link href="/feedback">
        <a>Go back</a>
      </Link>
      <p>{feedbackItem.message}</p>
      <p>
        {feedbackItem.name} - {feedbackItem.email}
      </p>
    </div>
  );
};

export default SingleFeedback;

export const getServerSideProps = async (context) => {
  const id = context.params.id;
  const feedbackItem = await prisma.feedback.findUnique({
    where: {
      id: id,
    },
    select: {
      message: true,
      feedbackType: true,
      email: true,
      name: true,
    },
  });
  return {
    props: { feedbackItem },
  };
};