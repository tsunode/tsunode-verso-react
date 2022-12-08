import { IRegisterData } from './../pages/Register/types';
import { api } from './api';

import { IUser } from './../providers/AuthContext/types';

export const getUserMe = async (): Promise<IUser> => {
    const response = await api.get<IUser>('/users/me');

    return response.data;
}

export const  registerUser = async (data: IRegisterData): Promise<IUser> => {
    const response = await api.post<IUser>('users', data);

    return response.data
}