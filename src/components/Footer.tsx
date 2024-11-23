import React from 'react'
import Logo from './assets/logo.svg'

export default function Footer() {
    return (
        <footer>
    <div className='mx-10 xl:mx-64 lg:mx-36 py-10 flex flex-col sm:flex-row gap-5'>
        <div className='flex flex-col items-center sm:items-start flex-1'>
            <img src={Logo.src} alt='logo' className='object-contain mb-4' />
            <p className='lg:text-l text-sm'>Веб-разработка и<br /> усиление IT-команды</p>
        </div>
        <div className='flex flex-row flex-1 gap-5 xl:text-l text-sm'>
            <div className='flex-1'>
                <ul className='space-y-8'>
                    <li>+7 999 123 45 67</li>
                    <li>hello@cyberia.studio</li>
                    <li>ул.Ярных, д.35, оф.10</li>
                </ul>
            </div>
            <div className='flex-1'>
                <ul className='space-y-8'>
                    <li>Агенство</li>
                    <li>Услуги</li>
                    <li>Кейсы</li>
                </ul>
            </div>
            <div className='flex-1'>
                <ul className='space-y-8'>
                    <li>Блог</li>
                    <li>Контакты</li>
                </ul>
            </div>
        </div>
    </div>
</footer>

    )
}
