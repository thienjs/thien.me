import React, { FC, useContext } from "react";
import DomainContext from "./DomainContext";

type Props = {
  onChange: (newDomain: string) => void;
  active: string;
};

const DomainsNavigator: FC<Props> = ({ onChange, active }) => {
  const domains = useContext(DomainContext).allIds;
  return (
    <div className="flex justify-between flex-wrap dark:border-zinc-800 border-b-2 select-none dark:bg-zinc-800">
      <div className="flex">
        {domains.map((domain) => (
          <div
            onClick={() => onChange(domain)}
            className={`p-3 cursor-pointer font-bold tracking-wider ${
              active === domain
                ? 'dark:bg-black dark:text-white bg-zinc-300 text-gray-900 border-b-4 border-cyan-600'
                : 'hover:bg-gray-200 dark:hover:bg-zinc-700'
            }`}
            key={domain}
          >
            {domain}
          </div>
        ))}
      </div>
    </div>
  )
};

export default DomainsNavigator;