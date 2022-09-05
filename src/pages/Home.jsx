import React from 'react'
import { Popular, Veggie } from '../components'
import styles from '../layout/layout'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
      animate={{ opacity : 1 }}
      initial={{ opacity : 0 }}
      exit ={{ opacity : 0 }}
      transition ={{ duration: 0.5 }}
    >
      <div className='w-full overflow-hidden'>
          <div className={`${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Veggie/>
            </div>
          </div>

          <div className={`${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Popular/>
            </div>
          </div>
      </div>
    </motion.div>
  )
}

export default Home