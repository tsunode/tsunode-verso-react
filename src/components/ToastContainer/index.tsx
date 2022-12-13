import { useToast } from "../../hooks/useToast"
import { Toast } from "../Toast"
import { Container } from "./styles"

export const ToastContainer = () => {
    const { messages } = useToast();

    return(
        <Container>
            {
                messages.map(message =>  
                    <Toast key={message.id} {...message} />
                )
            }
        </Container>
    )
}