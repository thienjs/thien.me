
import Image from "next/image";

import type { Project } from "data/projects";

const ProjectCard = ({ title, live, image }: Project) => {
  return (
    <a href={live} target="_blank" rel="noopener noreferrer">
      <div className="max-w-sm my-8 sm:max-w-none sm:my-0 group">
        <div className="flex lg:transition-all lg:transform lg:hover:scale-105">
          <Image
            src={image}
            alt={title}
            title={title}
            quality={50}
            className="rounded-lg"
          />
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;