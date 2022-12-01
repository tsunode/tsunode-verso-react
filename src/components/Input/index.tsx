import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';
import { Container } from './styles.js';

interface IInputProps 
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'placeholder'> {
    label: string;
    error?: string;
    children?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
    ({ id, label, alt, error, children, ...rest }, ref) => (
        <Container>
            <div>
                <input alt={alt} id={id} ref={ref} placeholder=' ' {...rest} />
                <label htmlFor={id}>{label}</label>
                {children}
            </div>
            {error && <p>{error}</p>}
        </Container>
    )
)