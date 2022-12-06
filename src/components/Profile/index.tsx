import { Container } from "./styles";
import profile from '../../assets/profile.webp';
import { IProfileProps } from "./types";

export const Profile = ({ size }: IProfileProps) => {
    return (
        <Container size={size}>
            <img src={profile} alt="" />
        </Container>
    )
}