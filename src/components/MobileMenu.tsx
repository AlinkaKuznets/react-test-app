import React from 'react'

export default function MobileMenu({ isOpen = false }) {
    return (
        <React.Fragment>
            <div className={`mobile-menu absolute top-0 right-0 w-full bg-black justify-center z-20 min-h-[150vh] ${isOpen ? 'flex' : 'hidden'}`}>
                <nav className='my-20 mx-5 space-y-5 text-lg w-full'>
                    <ul className='text-l mt-4 space-y-8'>
                        <li><a href='#'>Агенство</a></li>
                        <li><a href='#'>Услуги</a></li>
                        <li><a href='#'>Кейсы</a></li>
                        <li><a href='#'>Блог</a></li>
                        <li><a href='#'>Контакты</a></li>
                    </ul>
                    <div className='nav-contacts text-l'>
                        <hr/>
                        <div className='contacts space-y-8'>
                            <p className=''> Контакты:</p>
                            <ul className='space-y-8'>
                                <li>+7 999 123 45 67</li>
                                <li>hello@cyberia.studio</li>
                                <li>ул.Ярных, д.35, оф.10</li>
                            </ul>
                        </div>
                        <hr/>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    )
}