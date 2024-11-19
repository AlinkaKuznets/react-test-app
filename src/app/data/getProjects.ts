import { ProjectsResponse } from "@/models/projectsResponse";
import { Project } from "../../models/project";
import { fetchData, projectsRoute } from "./client";

export async function getProjects(): Promise<Project[]> {
    const response = await fetchData(projectsRoute);

    const data: ProjectsResponse = await response.json()

    return data.items;
}

