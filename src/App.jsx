import React from 'react'
import { Categories, Search } from './components'
import Pages from './pages/Pages'
import styles from './layout/layout'
import { BrowserRouter, Link } from 'react-router-dom'
import { TbToolsKitchen2 } from "react-icons/tb"

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <BrowserRouter>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <div className='my-5'>
                <Link
                  to={"/"}
                  className="flex flex-row items-center justify-center gap-2 text-[30px]"
                >
                  <TbToolsKitchen2 className='font-bold'/>
                  <h1 className='font-bold font-poppins uppercase'>Recipes</h1>
                </Link>
              </div>
              <div className='my-6'>
                <Search/>
              </div>
              <div >
                <Categories/>
              </div>
            </div>
        </div>
        <div className={`${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Pages/>
          </div>
        </div>
      </BrowserRouter>
    </div>  
  )
}

export default App