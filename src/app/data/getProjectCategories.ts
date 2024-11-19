import { CategoriesResponse } from "@/models/categoriesResponse";
import { categoriesRoute, fetchData } from "./client";
import { Category } from "@/models/categories";

export async function getProjectCategories(): Promise<Category[]> {
    const response = await fetchData(categoriesRoute);
    

    const data: CategoriesResponse = await response.json()

    return data.items;
}