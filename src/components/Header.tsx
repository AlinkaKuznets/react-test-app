"use client"
import React, { useState } from 'react'
import Logo from './assets/logo.svg'
import { IoMdClose as CloseMenu } from "react-icons/io";
import { IoMenu as IconMenu } from "react-icons/io5";
import MobileMenu from './MobileMenu';


export default function Hero() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className='header mt-16'>
      <div className='flex  gap-20'>
        <img src={Logo.src} alt='logo' />
        <ul className='header-menu hidden lg:flex gap-20 text- lg:text-l'>
          <li><a href='#'>Агенство</a></li>
          <li><a href='#'>Услуги</a></li>
          <li><a href='#'>Кейсы</a></li>
          <li><a href='#'>Блог</a></li>
          <li><a href='#'>Контакты</a></li>
        </ul>
        <div
          className='flex lg:hidden ml-auto cursor-pointer z-30'
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <CloseMenu className='w-8 h-8'/> : <IconMenu className='w-8 h-8'/>}
        </div>
        <MobileMenu isOpen={isMobileMenuOpen} />
      </div>

      <ul className='breadcrumbs flex mt-16 sm:text-xs lg:text-l '>
        <li><a href='#'>Главная</a></li>
        <li><span>Кейсы</span></li>
      </ul>

    </div>
  )
}
