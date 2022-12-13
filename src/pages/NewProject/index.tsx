import { useContext } from "react"
import { useForm } from "react-hook-form";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { InputFile } from "../../components/InputFile";
import { ProjectContext } from "../../providers/ProjectContext"
import { Button, Link } from "../../styles/Button";
import { Form } from "../../styles/Form";
import { Section } from "./styles";
import { ICreateProject } from "./types";

export const NewProject = () => {
    const { projects, createProject } = useContext(ProjectContext);
    const { register, handleSubmit, watch } = useForm<ICreateProject>();

    // // FormData()
    // watch('')

    return(
        <main>
            <Header />

            <Section>
                <Link variant="icon" to="/dashboard">
                    <AiOutlineArrowLeft />
                </Link>

                <Form onSubmit={handleSubmit(createProject)}>
                    <fieldset>
                        <legend>Criar Projeto</legend>

                        <InputFile
                            label='Thumb'
                            id='thumb'
                            watchFile={watch('thumb')}
                            {...register('thumb')}
                        />
                        <Input 
                            id='link' 
                            label='Link do projeto' 
                            {...register("link")} 
                        />
                        <Input 
                            id='adtionalLink' 
                            label='Link adcional (opcional)' 
                            {...register('adtionalLink')} 
                        />
                        <Input 
                            id='title' 
                            label='Título' 
                            {...register('title')} 
                        />
                        <Input 
                            id='description' 
                            label='Descrição' 
                            {...register('description')} 
                        />

                        <Button type="submit" variant="primary">
                            Salvar
                        </Button>
                    </fieldset>

                </Form>
            </Section>

        </main>

    )
}