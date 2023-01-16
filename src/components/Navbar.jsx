import React, {useState} from 'react'
import {
AiOutlineClose,
AiOutlineMenu} from 'react-icons/ai'
import Avatar_checkout from '../images/Avatar_checkout.png'


const Navbar = () => {

  const [nav, setNav] =useState(false)

  const handleNav = () =>{
      setNav(!nav)
  }

  return (
    <div className='flex justify-between px-4 items-center h-24 max-w-[1240px] mx-auto text-black'>
            <img className='p-4 w-[10%]' src={Avatar_checkout} alt="logo bp" />
        <ul className='hidden md:flex'>
            <li className='p-4'>Planos de estudo</li>
            <li className='p-4'>Planos de assinatura</li>
            <li className='p-4'>Campanhas MKT</li>
            <li className='p-4'>Cartão virtual (Como gerar)</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={25} className='top-0 right-0'/> : <AiOutlineMenu size={25} />}
        </div>

        {/* Mobile */}
        <div className={nav ? 'fixed left-0 top-0 w-[40%] border-r h-full border-r-gray-900 bg-[#0f140f] ease-in-out duration-500' : 'fixed left-[-100%]'} >
          <img className='p-4 md:hidden' src={Avatar_checkout} alt="logo brasil paralelo v branca" />
          <ul className='uppercase p-4'>
            <li className='p-4 border-b border-gray-500'>Planos de estudo</li>
            <li className='p-4 border-b border-gray-500'>Planos de assinatura</li>
            <li className='p-4 border-b border-gray-500'>Campanhas MKT</li>
            <li className='p-4 '>Cartão virtual (Como gerar)</li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar