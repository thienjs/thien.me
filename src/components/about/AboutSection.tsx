import { ReactNode } from 'react'
import { IconType } from 'react-icons'

export type AboutSectionProps = {
  title: string
  subtitle?: ReactNode
  id: string
  Icon?: IconType
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  children,
  title,
  subtitle,
  id,
  Icon,
}) => (
  <section className="" id={id}>
    <h1 className=" font-semibold text-gray-700 dark:text-gray-300">
      <span className="">
        {Icon ? (
          <Icon
            className="mr-0.5 self-center  p-0.5 md:mr-1 md:self-end md:p-1"
            size="1em"
          />
        ) : null}
        {title}
      </span>
    </h1>
    <h2 className="text-xs text-gray-400 dark:text-gray-400  ">{subtitle}</h2>
    <div className="">{children}</div>
  </section>
)
