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
  <section className="mt-4" id={id}>
    <h1 className="text-xl md:text-3xl font-bold text-title">
      <span className="flex">
        {Icon ? (
          <Icon
            className="self-center md:self-end text-highlight md:p-1 md:mr-1 mr-0.5 p-0.5"
            size="1em"
          />
        ) : null}
        {title}
      </span>
    </h1>
    <h2 className="text-sm font-bold text-subtitle">{subtitle}</h2>

    <div className="pt-2 pb-4">{children}</div>
  </section>
)