import { ITypeToast, IToast } from './../../providers/ToastContext/types';

export interface IToastProps extends IToast {
}

export interface IContainerProps {
    type: ITypeToast;
    isLeave: boolean;
    hasDescription: boolean;
}