"use client";
import React, { useEffect, useState } from 'react';
import Arrow from './assets/Arrow.svg';
import ArrowMobile from './assets/Arrow-mobile.svg'
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
        <div className={`project-list lg:place-content-between ${selectedCategory === 0 ? '' : 'lg:justify-center'}`}>
            {filteredProjects.map(item => (
                <div key={item.id} className='img-projects container group'>
                    <div className='relative transition duration-300 transform group-hover:scale-105'>
                        <img
                            src={item.image}
                            alt=''
                            className='projects-img'
                        />
                        <div className='dark-theme
                        bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100
                        lg:opacity-0 '>
                            <p className='description-project'>Онлайн гипермаркет. Для компании были разработаны сайт и мобильное приложение и т.д.</p>
                        </div>
                    </div>
                    <img src={ArrowMobile.src} alt=' ' className='arrow-mobile' />
                    <p className='mini-card text-l lg:text-2xl'>
                        {item.title}
                    </p>
                    <img src={Arrow.src} alt=' ' className='arrow-desktop' />
                </div>
            ))}
        </div>


    );
};

export default ProjectsList;
