import { FormEvent, useEffect, useState } from "react";
import Card from "../../components/Card"
import { api } from "../../services/api";

import { Section } from "./styles";

import { Header } from "../../components/Header";
import Input from "../../components/Input";
import { Button } from "../../styles/Button";
import { InfiniteScroll } from "../../components/InfiniteScroll";
import axios from "axios";

interface IUser {
    name: string;
    surname: string;
    title: string;
    avatar: string;
    avatarUrl: string;
}

interface IProject {
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

export const Dashboard = () => {
    const [projects, setProjects] = useState<IProject[]>([]);
    const [page, setPage] = useState(1);
    const [inputSearch, setInputSearch] = useState('');
    const [search, setSearch] = useState('');

    useEffect(() => {
        api.get<IProject[]>('/projects', {
            params: {
                page,
                pageSize: 3,
                q: search
            },
        })
        .then(response => {
            if(search && page === 1) {
                setProjects(response.data)
            }else {
                setProjects((oldProjects) => [...oldProjects, ...response.data])
            }
        }) 
        .catch(error => console.error(error))
    }, [page]);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setSearch(inputSearch);
        setPage(1);
    }

    return(
        <main>
            <Header>
                <form onSubmit={handleSubmit}>
                    <Input 
                        label='Procurar por projetos...'
                        name='project'
                        id='project'
                        onChange={event => setInputSearch(event.target.value)}
                    />
                </form>
                <Button variant='primary'>Novo projeto</Button>
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
               {<InfiniteScroll callback={() => setPage((oldPage) => oldPage + 1)}/> }
            </Section>
        </main>
    )
}