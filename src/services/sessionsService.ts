import { IUserLogin } from './../pages/Login/types';
import { IUser } from './../providers/AuthContext/types';
import { api } from './api';

export interface IUserLoginResponse {
    user: IUser;
    token: string;
}

export const createSession = async (data: IUserLogin): Promise<IUserLoginResponse> => {
    const response = await api.post<IUserLoginResponse>('/sessions', data);

    return response.data
}