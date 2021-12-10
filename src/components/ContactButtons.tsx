import Image from "next/image";
import React from "react";

interface ButtonProps {
  link: string;
  icon: string;
  name: string;
}

const ContactButtons: React.FC<ButtonProps> = ({ link, name, icon }) => {
  return (
    <div className="text-pink-500 dark:text-pink-500 ">
      <a
        target="_blank"
        rel="noreferrer"
        href={link}
        className="py-2 md:flex hidden px-5 my-6 mt-10 items-center rounded-lg  text-pink-500 dark:text-pink-500"
      >
        <Image src={`/logos/${icon}`} alt={name} width={25} height={25} className="text-pink-500 dark:text-pink-500"/>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={link}
        className="py-2 flex md:hidden items-center ml-6 mt-10 rounded-lg text-pink-500 dark:text-pink-500"
      >
        <Image src={`/logos/${icon}`} alt={name} width={25} height={25} className="text-pink-500 dark:text-pink-500"/>
      </a>
    </div>
  );
};

export default ContactButtons;
