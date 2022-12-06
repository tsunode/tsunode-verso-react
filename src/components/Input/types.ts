import { InputHTMLAttributes, ReactNode } from 'react';

export interface IInputProps 
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'placeholder'> {
    label: string;
    error?: string;
    children?: ReactNode;
}