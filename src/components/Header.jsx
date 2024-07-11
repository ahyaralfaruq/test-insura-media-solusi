import React from 'react'
import Logo from "@/assets/logo.png"
import Pocket from "@/assets/pocket.png"
import SearchBar from './ui/SearchBar'

const Header = ({ onSearch }) => {
  return (
    <header role="header" className="relative transition-[background,_border,_border-radius,_box-shadow] duration-[.3s] bg-gray-800 p-[0_1em] md:p-[0_2em]">
      <div className="relative flex flex-wrap items-center justify-between w-full">
         
        <div className="relative lg:max-w-[355px] sm:max-w-[200px] p-[10px]">
          <div className="transition-[background,_border,_border-radius,_box-shadow] duration-[.3s]">
            <img src={Logo} alt="logo" className="lg:inline-block sm:hidden h-[64px]" />
            <img src={Pocket} alt="logo" className="lg:hidden sm:inline-block h-[32px]" />
          </div>
        </div>

        <div className="relative lg:max-w-[355px] sm:max-w-[255px] lg:w-full p-[10px]">
          <div className="transition-[background,_border,_border-radius,_box-shadow] duration-[.3s]">
            <SearchBar onSearch={onSearch} />
          </div>
        </div>

      </div>
    </header>
  )
}

export default Header