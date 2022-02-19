import { ReactChildren, FunctionComponent } from 'react'

const Title: FunctionComponent = ({
  children,
}: {
  children: ReactChildren
}) => {
  return (
    <header className="text-md font-semibold text-gray-800 dark:text-gray-300 mt-20 mb-10">
      {children}
    </header>
  )
}

export default Title
