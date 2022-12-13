import { InputHTMLAttributes } from 'react';

export interface IInputFileProps 
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label: string;
    watchFile: File[];
}

export interface IContainerProps {
    isDragging: boolean;
}