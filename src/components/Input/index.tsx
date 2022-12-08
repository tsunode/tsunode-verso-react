import { forwardRef } from 'react';
import { Container } from './styles.js';
import { IInputProps } from './types.js';

export const Input = forwardRef<HTMLInputElement, IInputProps>(
    ({ id, label, alt, error, children, ...rest }, ref) => (
        <Container>
            <div>
                <input alt={alt} id={id} ref={ref} placeholder=' ' {...rest} />
                <label htmlFor={id}>{label}</label>
                {children}
            </div>
            {error && <p className='error-input'>{error}</p>}
        </Container>
    )
)