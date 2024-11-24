import { CategoriesResponse } from "@/models/categoriesResponse";
import { categoriesRoute, getData } from "./client";
import { Category } from "@/models/categories";

export async function getProjectCategories(): Promise<Category[]> {
    const response = await getData(categoriesRoute);


    const data: CategoriesResponse = await response.json()

    return data.items;
}