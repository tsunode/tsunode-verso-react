import { useContext } from "react"
import { ProjectContext } from "../providers/ProjectContext";

export const useProject = () => {
    const context = useContext(ProjectContext);

    return context;
}