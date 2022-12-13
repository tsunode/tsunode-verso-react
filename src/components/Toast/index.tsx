import { useEffect, useState } from "react"
import { FiAlertCircle, FiCheckCircle, FiInfo, FiXCircle } from "react-icons/fi"
import { useToast } from "../../hooks/useToast"
import { Container } from "./styles"
import { IToastProps } from "./types"

const icons = {
    warning: FiInfo,
    error: FiAlertCircle,
    success: FiCheckCircle
}

export const Toast = ({ type, description, title, id }: IToastProps) => {
    const [isLeave, setIsLeave] = useState(false);
    const { removeToast } = useToast();
    const Icon = icons[type];

    console.log(id);

    useEffect(() => {
        let timer: number;

        if(isLeave) {
            timer = setTimeout(() => {
                removeToast(id)
            }, 700);
        } else {
            timer = setTimeout(() => {
                setIsLeave(true)
            }, 3000);
        }

        return () => {
            clearTimeout(timer);
        }
    }, [isLeave])

    return(
        <Container 
            type={type} 
            isLeave={isLeave}
            hasDescription={!!description}
        >
            <Icon size={24} />

            <div>
                <strong>{title}</strong>
                {!!description && <p>{description}</p>}
            </div>

            <button type="button" onClick={() => setIsLeave(true)}>
                <FiXCircle size={18} />
            </button>
        </Container>
    )
}