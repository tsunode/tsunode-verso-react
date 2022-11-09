import { Container } from './styles.js';

const Input = ({ id, label, type, name, children }) => {
    return(
        <Container>
            <input type={type} name={name} id={id} placeholder=' ' />
            <label htmlFor={id}>{label}</label>
            {children}
        </Container>
    )
}

export default Input;

// const props = {
//     label: 'nome',
//     id: 'name'
// }

// const {label, id} = props;