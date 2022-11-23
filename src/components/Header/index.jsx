import { Children } from 'react'
import Profile from "../Profile"

import { Container } from "./styles";
import logoTsunodeVerso from '../../assets/tsunodeverso.svg';

export const Header = ({ children }) => {
    const [FormSearch, LinkNewProject] = Children.toArray(children);

    return(
        <Container>
            <img src={logoTsunodeVerso} alt="Logo Tsunode Verso" />

            {FormSearch}

            <div>
                {LinkNewProject}
                <Profile />
            </div>
        </Container>
    )
}