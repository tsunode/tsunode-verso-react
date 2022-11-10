import { Container } from "./styles";
import profile from '../../assets/profile.webp';

const Profile = () => {
    return (
        <Container>
            <img src={profile} alt="" />
        </Container>
    )
}

export default Profile;