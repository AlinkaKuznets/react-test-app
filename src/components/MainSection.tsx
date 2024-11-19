"use client"
import React, { useState, useEffect } from 'react'
import ProjectsList from './ProjectsList'
import CategoriesList from './CategoriesList';


export default function MainSection() {

    const [selectedCategory, setSelectedCategory] = useState<number>(0)

    const handleCategoryChange = (category: number) => {
        setSelectedCategory(category);
    }

    return (
        <div className='mx-64 '>
            <h1 className='mt-24 text-4xl'>Кейсы</h1>
            <CategoriesList onClick={handleCategoryChange}/>
            <ProjectsList selectedCategory={selectedCategory} />
        </div>
    );
};
