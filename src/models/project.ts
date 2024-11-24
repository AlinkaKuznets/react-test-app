import { Category } from './categories';

export interface Project {
   id: number;
   image: string;
   title: string;
   categories: Category[];
}
