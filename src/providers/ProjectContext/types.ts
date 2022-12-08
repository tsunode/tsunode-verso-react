import { IUser } from './../AuthContext/types';
import { ICreateProject } from './../../pages/NewProject/types';
import { ISearchProjectData } from './../../pages/Dashboard/types';
import { ReactNode } from 'react';

export interface IProjectProviderProps {
    children: ReactNode
}

export interface IProjectContext {
    projects: IProject[];
    setProjectPage: () => void;
    hasNextPage: boolean;
    handleFilterProject: (data: ISearchProjectData) => void
    createProject: (data: ICreateProject) => void
}

export interface IProject {
    id: string
    title: string;
    description: string;
    link: string;
    adtionalLink: string;
    thumb: string;
    thumbUrl: string;
    user: IUser;
    createdAt: Date;
    updatedAt: Date;
    elapsedTime: string;
}