import { ReactNode } from "react";

export type ITypeToast = 'success' | 'error' | 'warning';

export interface IToastProviderProps {
    children: ReactNode;
}

export interface IToastContext {
    messages: IToast[];
    addToast(data: IToastCreateData): void;
    removeToast(id: string): void;
}

export interface IToast {
    id: string;
    title: string;
    description?: string;
    type: ITypeToast;
}

export type IToastCreateData = Omit<IToast, 'id'>;