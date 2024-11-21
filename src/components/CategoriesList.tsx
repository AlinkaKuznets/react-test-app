import { getProjectCategories } from '@/app/data/getProjectCategories';
import { Category } from '@/models/categories';
import React, { useEffect, useState } from 'react'

interface Props {
    onClick: (n: number) => void;
}

export default function CategoriesList(props: Props) {

    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);


    useEffect(() => {
        getProjectCategories()
            .then(fetchCategory => {
                setCategories(fetchCategory);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, []);



    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error.message}</div>;

    return (
        <div className='button-section flex flex-row my-10  place-content-between'>
            {categories.map(item => (
                <button key={item.id} onClick={() => props.onClick(item.id)} className='button shadow-xl rounded-md'>{item.name}</button>
            ))}
        </div>
    )
}
