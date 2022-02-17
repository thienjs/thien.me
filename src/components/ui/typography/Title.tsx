import { ReactChildren, FunctionComponent } from 'react'

const Title: FunctionComponent = ({
  children,
}: {
  children: ReactChildren
}) => {
  return (
    <header className="text-sm font-semibold text-gray-800 dark:text-gray-300 mt-6">
      {children}
    </header>
  )
}

export default Title
