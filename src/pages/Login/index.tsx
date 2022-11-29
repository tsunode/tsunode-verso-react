import { MdEmail } from 'react-icons/md'
import { HiKey } from 'react-icons/hi'

import Input from "../../components/Input"
import { Main } from "../../styles/Main"

import tsunodeverso from "../../assets/tsunodeverso.svg"
import { Form } from "../../styles/Form";
import { Button, Link } from "../../styles/Button";

export const Login = () => {
    return(
        <Main>
            <img src={tsunodeverso} alt='Logo tsunode verso' /> 

            <Form>
                <fieldset>
                    <legend>Faça seu login:</legend>
 
                    <Input 
                        id='email' 
                        name='email' 
                        label='Email' 
                        type='email'  
                    >
                        <MdEmail />
                    </Input>
                    <Input 
                        id='password' 
                        name='password' 
                        label='Senha' 
                        type='password'
                    >
                        <HiKey />
                    </Input>
                    <Button type="submit" variant='primary'>Entrar</Button>    
                    <Link to='/signup' variant='inline'>Não é cadastrado ainda? Clique aqui</Link>                
                </fieldset>
            </Form>
        </Main>
    )
}