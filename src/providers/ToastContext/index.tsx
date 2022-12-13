import { createContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import {
  IToast,
  IToastContext,
  IToastCreateData,
  IToastProviderProps,
} from './types';

export const ToastContext = createContext<IToastContext>({} as IToastContext);

export const ToastProvider = ({ children }: IToastProviderProps) => {
  const [messages, setMessages] = useState<IToast[]>([]);

  function addToast(data: IToastCreateData): void {
    const toast = {
      id: uuid(),
      ...data,
    };

    setMessages([...messages, toast]);
  }

  function removeToast(id: string): void {
    const newMessages = messages.filter((message) => message.id !== id);

    setMessages(newMessages);
  }

  return (
    <ToastContext.Provider
      value={{
        addToast,
        messages,
        removeToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};
