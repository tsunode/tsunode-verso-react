import { useContext } from "react"
import { AuthContext } from "../providers/AuthContext"

export const useAuth = () => {
    const context = useContext(AuthContext);

    return context;
}