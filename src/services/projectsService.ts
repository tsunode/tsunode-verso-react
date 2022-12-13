import { IProject } from './../providers/ProjectContext/types';
import { api } from './api';

interface IGetProjectFilter {
    page: number;
    pageSize: number;
    q?: string | null;
}

export const getAllProjects = async (params: IGetProjectFilter): Promise<IProject[]> => {
    const response = await api.get<IProject[]>('/projects', {
       params
    });

    return response.data;
}

export const storeProject = async (data: FormData) => {
    const response = await api.post('projects', data);

    return response.data;
}