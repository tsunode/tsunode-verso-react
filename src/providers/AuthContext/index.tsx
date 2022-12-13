import { createContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IUserLogin } from '../../pages/Login/types';
import { api } from '../../services/api';
import { getUserMe } from '../../services/usersService';
import { createSession } from '../../services/sessionsService';
import { IAuthContext, IAuthProviderProps, IUser } from './types';
import { toast } from 'react-toastify';
import axios from 'axios';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        async function loadUser() {      
            const token = localStorage.getItem('@tsunode-verso:token');
    
            if(!token) {
                setLoading(false);
                return;
            }

            try {
                api.defaults.headers.common.authorization = `Bearer ${token}`;

                const response = await getUserMe();

                setUser(response);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        loadUser();
    }, [])

    async function signIn(data: IUserLogin) {
        try {         
            const { user: userResponse, token } = await createSession(data);
    
            localStorage.setItem('@tsunode-verso:token', token);

            const toNavigate = location.state?.from?.pathname || '/dashboard';

            setUser(userResponse);
            toast.success('Login realizado com sucesso');
            navigate(toNavigate, { replace: true });
        } catch (error) {
            if(!(error instanceof axios.AxiosError)) {
                toast.error('Erro interno');
                return; 
            }

            if(error.response?.status === 401) {
                toast.error('Usuário ou senha incorretos');
                return;
            }

        }
    }

    return(
        <AuthContext.Provider value={{ signIn, user, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

// a b d