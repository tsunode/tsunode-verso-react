import { useContext } from "react"
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { ProjectContext } from "../../providers/ProjectContext"
import { Button } from "../../styles/Button";
import { ICreateProject } from "./types";

export const NewProject = () => {
    const { projects, createProject } = useContext(ProjectContext);
    const { register, handleSubmit } = useForm<ICreateProject>();

    return(
       <form onSubmit={handleSubmit(createProject)}>
            <Input id='link' label='Link do projeto' {...register("link")} />
            <Input id='adtionalLink' label='Link adcional (opcional)' {...register('adtionalLink')} />
            <Input id='title' label='Título' {...register('title')} />
            <Input id='description' label='Descrição' {...register('description')} />

            <Button type="submit" variant="primary">
                Salvar
            </Button>
       </form>
    )
}