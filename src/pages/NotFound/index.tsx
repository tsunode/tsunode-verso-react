import { Main } from '../../styles/Main';

import { useAuth } from '../../hooks/useAuth';
import { Link } from '../../styles/Button';
import logoTsunodeVerso from '../../assets/tsunodeverso.svg';

export const NotFound = () => {
    const { user, loading } = useAuth();

    const toNavigate = user ? '/dashboard' : '/'

    if(loading) {
        return <div>Carregando</div>
    }

    return(
        <Main>
            <img src={logoTsunodeVerso} alt="Logo Tsunode Verso" />
            <h1>Página não encontrada</h1>
            <h2>404</h2>
            <Link to={toNavigate} variant='primary' >
               {user ? 'Voltar para Dashboard': 'Ir para Login'} 
            </Link>
        </Main>
    )
}