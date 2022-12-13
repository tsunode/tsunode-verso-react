import { useContext } from "react"
import { ToastContext } from "../providers/ToastContext"

export const useToast = () => {
    const context = useContext(ToastContext);

    return context;
}