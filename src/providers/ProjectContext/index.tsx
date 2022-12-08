import { createContext, useEffect, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ISearchProjectData } from '../../pages/Dashboard/types';
import { ICreateProject } from '../../pages/NewProject/types';
import { api } from '../../services/api';
import { getAllProjects } from '../../services/projectsService';
import { IProject, IProjectContext, IProjectProviderProps } from './types';

export const ProjectContext = createContext<IProjectContext>({} as IProjectContext);

export const ProjectProvider = ({ children }: IProjectProviderProps) => {
    const [projects, setProjects] = useState<IProject[]>([]);
    const [page, setPage] = useState(1);
    const [hasNextPage, setHasNextPage] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function getProjects() {
            try {
                const data = await getAllProjects({
                    page,
                    pageSize: 10,
                    q: searchParams.get('q')
                });
                
                if(page === 1) {
                    setProjects(data)
                }else {
                    setProjects((oldProjects) => [...oldProjects, ...data])
                }
    
                if(!data.length) {
                    setHasNextPage(false);
                }
            } catch (error) {
                console.error(error)
            }
        }

        getProjects();

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

        // api.post('', data)

        // setProjects([data, ...projects]);
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