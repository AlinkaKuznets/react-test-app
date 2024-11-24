import React from 'react'
import Logo from './assets/logo.svg'

export default function Footer() {
    return (
        <footer>
            <div className='xl:mx-64 lg:mx-36 sm:flex-row'>
                <div className='footer-logo sm:items-start'>
                    <img src={Logo.src} alt='logo' />
                    <p className='lg:text-l text-sm'>Веб-разработка и<br /> усиление IT-команды</p>
                </div>
                <div className='footer-col xl:text-l text-sm'>
                    <div className='flex-1'>
                        <ul className='space-y-8'>
                            <li>+7 999 123 45 67</li>
                            <li>hello@cyberia.studio</li>
                            <li>ул.Ярных, д.35, оф.10</li>
                        </ul>
                    </div>
                    <div className='flex-1'>
                        <ul className='space-y-8'>
                            <li><a href='#'>Агенство</a></li>
                            <li><a href='#'>Услуги</a></li>
                            <li><a href='#'>Кейсы</a></li>
                        </ul>
                    </div>
                    <div className='flex-1'>
                        <ul className='space-y-8'>
                            <li><a href='#'>Блог</a></li>
                            <li><a href='#'>Контакты</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    )
}
