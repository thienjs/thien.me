import * as React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import Image from 'next/image';
import { FiChevronRight, FiExternalLink } from 'react-icons/fi';
export interface IAccordianProps {
  name: string;
  slug: string;
  image: string;

  assets: {
    id: string;
    name: string;
    image: string;
    description: string;
    urlLink?: string;
  }[];
}

export function Accordian(props: IAccordianProps) {
  const { slug, name, image, assets } = props;
  return (
    <Accordion.Item value={slug}>
      <Accordion.Header asChild>
        <Accordion.Trigger className="group relative mb-3 w-full max-w-5xl rounded-2xl  p-3 hover:bg-gray-200 focus:ring-2 hover:dark:bg-gray-800">
          <span className="relative flex w-full flex-wrap items-center space-x-2">
            <Image
              width={45}
              height={45}
              alt={`${name} assets collection`}
              src={image}
              className="rounded-full"
            />

            <div className="flex-1 ">
              <div className="flex w-full items-center justify-between">
                <h3 className=" text-lg font-semibold  ">{name}</h3>

                <div className="flex items-center space-x-2">
                  <span>{assets.length}</span>
                  <FiChevronRight
                    aria-hidden
                    className="h-5 w-5 transition delay-150 ease-out group-rdx-state-open:rotate-90"
                  />
                </div>
              </div>
            </div>
          </span>
        </Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content className="mb-2">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-12">
          {assets.map((data) => (
            <React.Fragment key={data.id}>
              <div className="md:col-span-2">
                <Image
                  width={200}
                  height={200}
                  className="rounded-md"
                  alt={`${data.name} assets`}
                  src={data.image}
                />
              </div>
              <div className="md:col-span-10">
                <div className="flex items-center space-x-2">
                  <h3 className="mt-4 text-lg font-semibold ">{data.name}</h3>
                  {data.urlLink ? (
                    <a
                      href={data.urlLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiExternalLink className="mt-4" />
                    </a>
                  ) : null}
                </div>
                <p className="mt-4 max-w-2xl break-words  text-gray-600 dark:text-gray-400">
                  {data.description}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
}

export function AccordianRoot({ children }: { children: React.ReactNode }) {
  return <Accordion.Root type="multiple">{children}</Accordion.Root>;
}