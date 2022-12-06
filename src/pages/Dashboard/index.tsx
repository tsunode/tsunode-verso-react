import { FormEvent, useContext, useRef, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Card } from "../../components/Card"
import { Input } from "../../components/Input";
import { InfiniteScroll } from "../../components/InfiniteScroll";

import { Section } from "./styles";
import { Button, Link } from "../../styles/Button";
import { useForm } from "react-hook-form";
import { ProjectContext } from "../../providers/ProjectContext";
import { ISearchProjectData } from "./types";

export const Dashboard = () => {
   const { register, handleSubmit } = useForm<ISearchProjectData>();
   const { 
        projects, 
        setProjectPage, 
        hasNextPage, 
        handleFilterProject 
    } = useContext(ProjectContext);
 
    return(
        <main>
            <Header>
                <form onSubmit={handleSubmit(handleFilterProject)}>
                    <Input 
                        label='Procurar por projetos...'
                        id='project'
                        {...register('project')}
                    >
                        <Button variant="inline" width="auto">
                            <FiSearch />
                        </Button>
                    </Input>
                </form>
                <Link to='/new-project' variant='primary'>Novo projeto</Link>
            </Header>

            <Section>
                <ul>
                    {
                        projects.map(project =>
                            <Card 
                                key={project.id} 
                                {...project}
                            />
                        )
                    }
                </ul>
    
                <InfiniteScroll 
                    callback={setProjectPage}
                    hasNextPage={hasNextPage}
                />
            </Section>
        </main>
    )
}