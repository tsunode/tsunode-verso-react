import { IUserLogin } from './../../pages/Login/types';
import { ReactNode } from 'react';

export interface IAuthProviderProps {
    children: ReactNode;
}

export interface IAuthContext {
    signIn(data: IUserLogin): Promise<void>;
    user: IUser | null;
    loading: boolean;
}

export interface IUser {
    name: string;
    surname: string;
    title: string;
    avatar: string;
    avatarUrl: string;
}