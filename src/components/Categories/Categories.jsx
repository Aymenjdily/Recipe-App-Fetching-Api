import React from 'react'
import { FaPizzaSlice, FaHamburger } from "react-icons/fa"
import { GiNoodles, GiChopsticks } from "react-icons/gi"
import { NavLink } from 'react-router-dom'
import styles from '../../layout/layout'

const Categories = () => {
  return (
    <div className={`flex flex-row justify-center items-center gap-8 ${styles.paddingX}`}>
        <NavLink to={'/cuisine/Italian'}>
            <div className='flex flex-col justify-center items-center rounded-full p-2 cursor-pointer gap-2 hover:scale-110 duration-150'>
                <FaPizzaSlice/>
                <h4 className='font-bold text-gray'>Pizza</h4>
            </div>
        </NavLink>

        <NavLink to={'/cuisine/American'}>
            <div className='flex flex-col justify-center items-center rounded-full p-2 cursor-pointer gap-2 hover:scale-110 duration-150' >
                <FaHamburger/>
                <h4 className='font-bold text-gray'>Burgers</h4>
            </div>
        </NavLink>

        <NavLink to={'/cuisine/Thai'}>
            <div className='flex flex-col justify-center items-center rounded-full p-2 cursor-pointer gap-2 hover:scale-110 duration-150'>
                <GiNoodles/>
                <h4 className='font-bold text-gray'>Noodles</h4>
            </div>
        </NavLink>

        {/* <NavLink to={'/cuisine/Japan'}>
            <div className='flex flex-col justify-center items-center rounded-full p-2 cursor-pointer gap-2'>
                <GiChopsticks/>
                <h4 className='font-bold text-gray'>Chopsticks</h4>
            </div>
        </NavLink> */}
    </div>
  )
}

export default Categories