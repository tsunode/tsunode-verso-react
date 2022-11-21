import { useEffect, useState } from "react";
import Card from "../../components/Card"
import { api } from "../../services/api";

import { Section } from "./styles";

import { Header } from "../../components/Header";
import { Main } from "../../styles/Main";
import Input from "../../components/Input";
import { Button } from "../../styles/Button";


const Dashboard = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('/projects', {
            params: {
                page: 1,
                pageSize: 20
            }
        })
        .then(response => setProjects(response.data))
        .catch(error => console.error(error));
    }, [])

    return(
        <main>
            <Header>
                <form>
                    <Input 
                        label='Procurar por projetos...'
                        name='project'
                        id='project'
                    />
                </form>
                <Button variant='primary'>Novo projeto</Button>
            </Header>

            <Button variant='primary'>Novo projeto</Button>
            <Button variant='inline'>Voltar</Button>

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
            </Section>
        </main>
    )
}

export default Dashboard