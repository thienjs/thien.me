import clsx from 'clsx';
import * as React from 'react';

import Image from 'next/image';
import UnstyledLink from '~/components/ui/links/UnstyledLink';
import TechIcons, { TechListType } from '~/components/icons/tech-icons/TechIcons';

import { ProjectCard } from '~/types/types';
import NextImage from '../images/NextImage';

type ProjectCardProps = {
  project: ProjectCard;
} & React.ComponentPropsWithoutRef<'li'>;

export default function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <li
      className={clsx(
        'project-card rounded-md md:w-full',
        'border dark:border-gray-600',
        'transform-gpu scale-100 hover:scale-[1.02] active:scale-[0.97]',
        'transition duration-100',
        'animate-shadow',
        className
      )}
    >
      <UnstyledLink
        href={`/projects/${project.slug}`}
        className='flex flex-col items-start p-4 h-full rounded-md focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
      >
        <h4>{project.title}</h4>
        <p className='mb-auto text-sm text-gray-700 dark:text-gray-300'>
          {project.description}
        </p>
        <div className='mt-2'>
          <TechIcons techs={project.techs.split(',') as Array<TechListType>} />
        </div>

        <Image src="/"
          className='mt-3 w-full pointer-events-none'
          alt={project.title}
          width={1440}
          height={792}
        />

        <p className='animated-underline inline-block mt-2 font-medium'>
          See more →
        </p>
      </UnstyledLink>
    </li>
  );
}
