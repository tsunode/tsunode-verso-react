import axios from 'axios';
import { createContext, useEffect, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ISearchProjectData } from '../../pages/Dashboard/types';
import { ICreateProject } from '../../pages/NewProject/types';
import { api } from '../../services/api';
import { IProject, IProjectContext, IProjectProviderProps } from './types';

export const ProjectContext = createContext<IProjectContext>({} as IProjectContext);

export const ProjectProvider = ({ children }: IProjectProviderProps) => {
    const [projects, setProjects] = useState<IProject[]>([]);
    const [page, setPage] = useState(1);
    const [hasNextPage, setHasNextPage] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const isFirstRender = useRef(true);

    useEffect(() => {
        const { CancelToken } = axios;
        const source = CancelToken.source();

        api.get<IProject[]>('/projects', {
            params: {
                page,
                pageSize: 10,
                q: searchParams.get('q')
            },
            cancelToken: source.token
        })
        .then(response => {
            const { data } = response;

            if(page === 1) {
                setProjects(data)
            }else {
                setProjects((oldProjects) => [...oldProjects, ...data])
            }

            if(!data.length) {
                setHasNextPage(false);
            }
        }) 
        .catch(error => console.error(error))

        return () => {
            if(isFirstRender.current) {
                isFirstRender.current = false;
                return;
            }

            source.cancel();
        }
    }, [page]);

    useEffect(() => {
        setPage(1);
    }, [searchParams]);

    function setProjectPage() {
        setPage((oldPage) => oldPage + 1)
    }

    function handleFilterProject({ project }: ISearchProjectData) {
        setSearchParams({
            q: project
        });
        setHasNextPage(true);
    }


    function createProject(data: ICreateProject) {
        console.log(data)

        // vou chamar api

        setProjects([data, ...projects]);
        navigate('/dashboard')
    }


    return(
        <ProjectContext.Provider value={{ 
                projects, 
                createProject,
                setProjectPage, 
                hasNextPage,
                handleFilterProject 
            }}
        >
            {children}
        </ProjectContext.Provider>
    )
}