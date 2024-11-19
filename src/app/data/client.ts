const baseUrl = 'https://api.test.cyberia.studio/api/v1'

export const projectsRoute = '/projects'

export const feedbackRoute = '/feedback'

export const categoriesRoute = '/project-categories'

export async function fetchData(route: string): Promise<Response> {
    try {
        const response = await fetch(`${baseUrl}${route}`)

        if (!response.ok) {
            throw new Error(`Status: ${response.status}`);
        }

        return response
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        throw error;
    }
}