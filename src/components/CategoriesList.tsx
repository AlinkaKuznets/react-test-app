import { getProjectCategories } from '@/app/data/getProjectCategories';
import { Category } from '@/models/categories';
import React, { useEffect, useState } from 'react';

interface Props {
   onClick: (n: number) => void;
}

export default function CategoriesList(props: Props) {
   const [categories, setCategories] = useState<Category[]>([]);
   const [loading, setLoading] = useState<boolean>(true);
   const [error, setError] = useState<Error | null>(null);
   const [selectedId, setSelectedId] = useState<number | null>(null);

   useEffect(() => {
      getProjectCategories()
         .then((fetchCategory) => {
            setCategories(fetchCategory);
            setLoading(false);
         })
         .catch((err) => {
            setError(err);
            setLoading(false);
         });
   }, []);

   const handleClick = (id: number) => {
      if (selectedId === id) {
         setSelectedId(null);
         props.onClick(0);
      } else {
         setSelectedId(id);
         props.onClick(id);
      }
   };

   if (loading) return <div>Загрузка...</div>;
   if (error) return <div>Ошибка: {error.message}</div>;

   return (
      <div className="category-section xl:text-xl text-sm">
         {categories.map((item) => (
            <button
               key={item.id}
               onClick={() => handleClick(item.id)}
               className={`button-type shadow-xl ${selectedId === item.id ? 'selected' : ''}`}
            >
               {item.name}
            </button>
         ))}
      </div>
   );
}
