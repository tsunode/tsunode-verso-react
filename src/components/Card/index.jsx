import { Container } from "./styles";

const Card = ({ image }) => {
    return(
        <Container>
            <img src={image} alt="" />
        </Container>
    )
} 

export default Card;