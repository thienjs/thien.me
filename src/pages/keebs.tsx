import { Title, Description, H2 } from '~/components/ui/typography'
import {uses} from '~/data'
import Link from 'next/link'

const KeebsPage = () => (
  <>
    <Title>Keebs</Title>
    <Description>Keyboards I've built.</Description>
    {uses.map((item) => (
          <li key={item.title} className="flex flex-col items-start ">
            <H2>
              {item.title}
            </H2>

            <div className="justify-baseline ml-5 flex flex-col gap-y-4 mb-10 pr-32">
              {item.list.map((subItem, index) => (
                <div key={subItem + index.toString()}>
                  <div className="flex flex-wrap gap-y-2 text-sm text-neutral-800 dark:text-neutral-300 sm:flex-nowrap ">
                    <Link href={subItem.link}>
                      <div className="cursor-pointer font-semibold underline decoration-dashed decoration-1 underline-offset-2 hover:decoration-wavy">
                        {subItem.title}
                      </div>
                    </Link>

                    {subItem.description && (
                      <div className="flex ">
                        <span className="px-2 text-gray-600 dark:text-gray-400">
                          -
                        </span>
                        <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400 font-serif ">
                          {subItem.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </li>
        ))}
  </>
)

export default KeebsPage
