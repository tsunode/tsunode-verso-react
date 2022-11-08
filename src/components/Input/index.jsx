import './styles.css'

const Input = ({ id, label, type, name, children }) => {
    return(
        <>
            <label htmlFor={id}>{label}</label>
            <input type={type} name={name} id={id} />
            {children}
        </>
    )
}

export default Input;

// const props = {
//     label: 'nome',
//     id: 'name'
// }

// const {label, id} = props;