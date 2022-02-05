import { ReactNode } from "react"
import { IconType } from "react-icons"

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
            className="self-center md:self-end  md:p-1 md:mr-1 mr-0.5 p-0.5"
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