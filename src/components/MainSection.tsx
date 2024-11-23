"use client"
import React, { useState } from 'react'
import ProjectsList from './ProjectsList'
import CategoriesList from './CategoriesList';
import Anketa from './Anketa/Anketa';
import Mail from './assets/Anketa.svg'


export default function MainSection() {

    const [selectedCategory, setSelectedCategory] = useState<number>(0)

    const handleCategoryChange = (category: number) => {
        setSelectedCategory(category);
    }

    return (
        <div className='main-section '>
            <h1 className='mt-24 xl:text-3xl text-2xl  '>Кейсы</h1>
            <CategoriesList onClick={handleCategoryChange} />
            <ProjectsList selectedCategory={selectedCategory} />
            <div className='mt-20 flex sm:flex-row'>
                <img src={Mail.src} alt='' className='sm:hidden w-20 h-20 mr-5' />
                <h1 className='xl:text-3xl text-2xl mt-2'>Расскажите <br /> о вашем проекте:</h1>
            </div>
            <Anketa />
        </div>
    );
};
