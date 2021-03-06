import classNames from 'classnames'
import styles from '~/styles/gg-spinner.module.css'

type SpinnerSize = 'lg' | 'xl' | 'xxl'
type SpinnerProps = {
  size?: SpinnerSize
}

const Spinner: React.FunctionComponent<SpinnerProps> = ({ size }) => (
  <div
    className={classNames(
      styles['gg-spinner'],
      styles[size] ? styles[size] : null
    )}
  ></div>
)

export default Spinner

export const SpinnerFullPage: React.FunctionComponent<SpinnerProps> = ({
  size = 'xl',
}) => (
  <div className="flex h-screen w-screen place-items-center justify-center">
    <Spinner size={size} />
  </div>
)
