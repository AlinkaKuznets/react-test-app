import { ProjectsResponse } from "@/models/projectsResponse";
import { Project } from "../../models/project";
import { getData, projectsRoute } from "./client";

export async function getProjects(): Promise<Project[]> {
    const response = await getData(projectsRoute);

    const data: ProjectsResponse = await response.json()

    return data.items;
}

