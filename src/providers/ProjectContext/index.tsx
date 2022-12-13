import { createContext, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useToast } from '../../hooks/useToast';
import { ISearchProjectData } from '../../pages/Dashboard/types';
import { ICreateProject } from '../../pages/NewProject/types';
import { getAllProjects, storeProject } from '../../services/projectsService';
import {
  ICreateProjectKeys,
  IProject,
  IProjectContext,
  IProjectProviderProps,
} from './types';

export const ProjectContext = createContext<IProjectContext>(
  {} as IProjectContext
);

export const ProjectProvider = ({ children }: IProjectProviderProps) => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const { user } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    async function getProjects() {
      try {
        const data = await getAllProjects({
          page,
          pageSize: 10,
          q: searchParams.get('q'),
        });

        if (page === 1) {
          setProjects(data);
        } else {
          setProjects((oldProjects) => [...oldProjects, ...data]);
        }

        if (!data.length) {
          setHasNextPage(false);
        }
      } catch (error) {
        console.error(error);
        addToast({
          type: 'error',
          title: 'Erro ao buscar os projetos',
        });
      }
    }

    getProjects();
  }, [page]);

  useEffect(() => {
    setPage(1);
  }, [searchParams]);

  function setProjectPage() {
    setPage((oldPage) => oldPage + 1);
  }

  function handleFilterProject({ project }: ISearchProjectData) {
    setSearchParams({
      q: project,
    });
    setHasNextPage(true);
  }

  async function createProject(data: ICreateProject) {
    try {
      const form = new FormData();

      Object.keys(data).forEach((key) => {
        if (key === 'thumb') {
          form.append(key, data.thumb[0]);
          return;
        }

        form.append(key, data[key as ICreateProjectKeys]);
      });

      const project = await storeProject(form);

      const newProject = {
        ...project,
        user,
      };

      addToast({
        type: 'success',
        title: 'Novo projeto cadastrado com sucesso',
      });
      setProjects([newProject, ...projects]);

      navigate('/dashboard');
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Erro ao cadastrar o projeto',
      });
      console.error(error);
    }
  }

  return (
    <ProjectContext.Provider
      value={{
        projects,
        createProject,
        setProjectPage,
        hasNextPage,
        handleFilterProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
