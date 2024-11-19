import React from 'react'
import Logo from './assets/logo.svg'


export default function Hero() {
  return (
    <div className='hero mx-64'>
      <div className='flex mt-16 gap-20'>
        <img src={Logo.src} alt='logo' />
        <ul className='flex gap-20'>
          <li><a href='#'>Агенство</a></li>
          <li><a href='#'>Услуги</a></li>
          <li><a href='#'>Кейсы</a></li>
          <li><a href='#'>Блог</a></li>
          <li><a href='#'>Контакты</a></li>
        </ul>
      </div>

        <ul className='flex mt-16 '>
          <li className='text-[#9AA8BA]'><a href='#'>Главная /</a></li>
          <li className='text-[#C4D2E3]'><span>Кейсы</span></li>
        </ul>

      </div>
  )
}
