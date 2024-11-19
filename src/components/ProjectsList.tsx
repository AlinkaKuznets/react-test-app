"use client";
import React, { useEffect, useState } from 'react';
import Arrow from './assets/Arrow.svg';
import { getProjects } from '@/app/data/getProjects';
import { Project } from '@/models/project';


interface ProjectsListProps {
    selectedCategory: number;
}

const ProjectsList: React.FC<ProjectsListProps> = ({ selectedCategory }) => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        getProjects()
            .then(fetchedData => {
                setProjects(fetchedData);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error.message}</div>;

    const filteredProjects = selectedCategory === 0
        ? projects
        : projects.filter(e => e.categories.find(c => c.id == selectedCategory))

    return (
        <div className='flex flex-wrap place-content-between'>
            {filteredProjects.map(item => (
                <div key={item.id} className='relative container w-72 group'>
                    <img
                        src={item.image}
                        alt=''
                        className='rounded-md mb-8 pr-0 transition duration-300 ease-in-out transform group-hover:scale-105'
                        style={{ width: '280px', height: '280px', objectFit: 'cover' }}
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-slate-950 to-black-opacity-0 bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end'>
                        <p className='text-white p-4'>Онлайн гипермаркет. Для компании были разработаны сайт и мобильное приложение и т.д.</p>
                    </div>

                    <h1 className='absolute top-0 right-0 bg-[#313341] justify-center items-center w-24 h-24 mt-5 mr-5 rounded-md'>
                        {item.title}
                    </h1>
                    <img src={Arrow.src} className='absolute top-4 right-4 w-4 h-4' />
                </div>
            ))}
        </div>
    );
};

export default ProjectsList;
