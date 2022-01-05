import styles from '@/styles/loader.module.css'

const Skeleton = () => {
  return (
    <div className={styles.projectskeleton}>
      <p className={styles.projectdummytitle}></p>
      <p className={styles.projectdummydescription}></p>
      <p className={styles.projectdummydescription}></p>
      <p className={styles.projectdummylanguage}></p>
    </div>
  )
}

const Loader = () => {
  return (
    <>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </>
  )
}

export default Loader
