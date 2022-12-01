import { Children, ReactNode } from 'react'
import { Profile } from "../Profile"

import { Container } from "./styles";
import logoTsunodeVerso from '../../assets/tsunodeverso.svg';

interface IHeaderProps {
    children: ReactNode
}

export const Header = ({ children }: IHeaderProps) => {
    const [FormSearch, LinkNewProject] = Children.toArray(children);

    return(
        <Container>
            <img src={logoTsunodeVerso} alt="Logo Tsunode Verso" />

            {FormSearch}

            <div>
                {LinkNewProject}
                <Profile size={60} />
            </div>
        </Container>
    )
}