import React, { FC } from "react";

type Props = {
  icon: string;
  size: string;
  className?: string;
};

const Icon: FC<Props> = ({ icon, size, className }) => {
  return (
    <img
      className={`${className} select-none`}
      width={size}
      src={`/assets/icons/${icon}.svg`}
      alt={icon}
    />
  );
};

export default Icon;