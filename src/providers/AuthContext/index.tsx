import { createContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IUserLogin } from '../../pages/Login/types';
import { api } from '../../services/api';
import { getUserMe } from '../../services/usersService';
import { createSession } from '../../services/sessionsService';
import { IAuthContext, IAuthProviderProps, IUser } from './types';

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
            const { user: userResponse, token }= await createSession(data);
    
            localStorage.setItem('@tsunode-verso:token', token);

            console.log(location);

            const toNavigate = location.state?.from?.pathname || '/dashboard';

            setUser(userResponse);
            navigate(toNavigate, { replace: true });
        } catch (error) {
            console.error(error)
        }
    }

    return(
        <AuthContext.Provider value={{ signIn, user, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

// a b d