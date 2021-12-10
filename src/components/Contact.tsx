import Image from "next/image";
import React from "react";
import ContactButtons from "./ContactButtons";
import data from "~/data/data.json";


const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col items-center z-50 justify-center w-screen mt-20 -ml-6 md:ml-0"
    >
      <div className="flex items-center mt-10 space-x-5">
        <h2 className="text-xl text-text md:text-4xl whitespace-nowrap">
          Contact
        </h2>

      </div>

      <div className="flex flex-wrap items-center ml-8 sm:ml-auto justify-center mx-auto">
        {data.links.map((link, i) => (
          <div key={i}>
            <ContactButtons
              name={link.name}
              icon={link.icon}
              link={link.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
