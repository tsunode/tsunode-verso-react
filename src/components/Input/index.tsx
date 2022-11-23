import { InputHTMLAttributes, ReactNode } from 'react';
import { Container } from './styles.js';

interface IInputProps 
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'placeholder'> {
    label: string;
    children?: ReactNode;
}

const Input = ({ id, label, alt, children, ...rest }: IInputProps) => {
    return(
        <Container>
            <input alt={alt} id={id} placeholder=' ' {...rest} />
            <label htmlFor={id}>{label}</label>
            {children}
        </Container>
    )
}

export default Input;