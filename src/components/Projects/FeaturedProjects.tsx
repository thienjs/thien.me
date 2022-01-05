import Image from 'next/image'
import { motion } from 'framer-motion'
import NexusHero from '@/public/assets/NexusLanding.png'
import styles from '@/styles/projects.module.css'

export default function FeaturedProjects() {
  return (
    <motion.figure
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.9997 }}
      transition={{ duration: 0.2 }}
      className={styles.featured}
    >
      <a
        href="https://nexus-ucr.vercel.app"
        target="_blank"
        rel="noreferrer noopener"
      >
        <div className={styles.featuredimagewrapper}>
          <Image
            src={NexusHero}
            layout="responsive"
            height={50}
            width={100}
            objectFit="contain"
            alt="Nexus Mockup Image"
            priority={true}
            quality={100}
            placeholder="blur"
            className={styles.featuredimage}
          />
        </div>
      </a>
    </motion.figure>
  )
}
