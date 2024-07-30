import React from 'react'
import styles from './style'
import { Navbar, Hero, CardList, HowItWorks } from './components'

const App = () => {
  return (
    <div className='bg-white w-full overflow-hidden'>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      
      <div>
        <div className='py-4'>
          <HowItWorks/>
        </div>
      </div>

      <div>
        <div className='py-4'>
          <CardList />
        </div>
      </div>


    </div>
  )
}

export default App;