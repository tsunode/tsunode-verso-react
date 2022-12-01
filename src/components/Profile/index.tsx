import { Container } from "./styles";
import profile from '../../assets/profile.webp';

interface IProfileProps {
    size: number
}

export const Profile = ({ size }: IProfileProps) => {
    return (
        <Container size={size}>
            <img src={profile} alt="" />
        </Container>
    )
}