import React from 'react'
import Logo from './assets/logo.svg'

export default function Footer() {
    return (
        <footer className='bg-[#313341] flex flex-col  mt-25'>
            <div className='columns-2 mx-64 max-md: flex-col flex-wrap justify-between gap-5 sm: py-10 '>
                <div className='col-md-2 justify-start items-start'>
                    <img src={Logo.src} alt='logo' className='object-contain' />
                    <p>Веб-разработка и<br /> усиление IT-команды</p>
                </div>
                <div className=' '>
                    <ul className=''>
                        <li>+7 999 123 45 67</li>
                        <li>hello@cyberia.studio</li>
                        <li>ул.Ярных, д.35, оф.10</li>
                    </ul>
                    <ul>
                        <li>Агенство</li>
                        <li>Услуги</li>
                        <li>Кейсы</li>
                    </ul>
                    <ul>
                        <li>Блог</li>
                        <li>Контакты</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
