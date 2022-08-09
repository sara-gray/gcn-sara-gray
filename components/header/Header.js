import React from 'react'
import Menu from '../menu/Menu'

const Header = () => {
  return (
    <nav className='fixed inset-0
    bg-[#c30006]
    w-screen h-12 px-2
    flex justify-between items-center'>
      <img
        alt='Global Cycling Network Logo'
        src={'/assets/GCNLogoTxt.svg'}
        width={90}
      />
      <div className='flex gap-2'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <Menu />
      </div>
    </nav>
  )
}

export default Header