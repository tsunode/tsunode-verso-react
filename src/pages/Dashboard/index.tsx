import { FormEvent, useEffect, useRef, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import axios from "axios";

import Card from "../../components/Card"
import { api } from "../../services/api";

import { Section } from "./styles";

import { Header } from "../../components/Header";
import Input from "../../components/Input";
import { Button } from "../../styles/Button";
import { InfiniteScroll } from "../../components/InfiniteScroll";

interface IUser {
    name: string;
    surname: string;
    title: string;
    avatar: string;
    avatarUrl: string;
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

export const Dashboard = () => {
    const [projects, setProjects] = useState<IProject[]>([]);
    const [page, setPage] = useState(1);
    const [inputSearch, setInputSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [hasNextPage, setHasNextPage] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const firstRender = useRef(true);

    useEffect(() => {
        console.log(page, 'teste')
        setLoading(true);
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
            if(page === 1) {
                setProjects(response.data)
            }else {
                setProjects((oldProjects) => [...oldProjects, ...response.data])
            }

            if(!response.data.length) {
                setHasNextPage(false);
            }
        }) 
        .catch(error => console.error(error))
        .finally(() => setLoading(false))

        return () => {
            if(firstRender.current) {
                firstRender.current = false;
                return;
            }

            source.cancel();
        }
    }, [page, searchParams]);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setSearchParams({ q: inputSearch })
        setPage(1);
        setHasNextPage(true);
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
            
                <InfiniteScroll 
                    hasNextPage={hasNextPage} 
                    callback={() => setPage((oldPage) => oldPage + 1)}
                /> 
            </Section>
        </main>
    )
}