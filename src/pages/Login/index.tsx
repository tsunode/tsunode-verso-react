import { useForm } from 'react-hook-form'
import { MdEmail } from 'react-icons/md'
import { HiKey } from 'react-icons/hi'

import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from './validations'

import { Input } from "../../components/Input"
import { Main } from "../../styles/Main"
import { Form } from "../../styles/Form";
import { Button, Link } from "../../styles/Button";

import tsunodeverso from "../../assets/tsunodeverso.svg"
import { IUserLogin } from './types'
import { useContext } from 'react'
import { AuthContext } from '../../providers/AuthContext'

export const Login = () => {
    const { signIn } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm<IUserLogin>({
        resolver: yupResolver(schema)
    });

    return(
        <Main>
            <img src={tsunodeverso} alt='Logo tsunode verso' /> 

            <Form onSubmit={handleSubmit(signIn)}>
                <fieldset>
                    <legend>Faça seu login:</legend>
 
                    <Input 
                        id='email' 
                        label='Email' 
                        type='email' 
                        error={errors.email?.message} 
                        {...register('email')}
                    >
                        <MdEmail />
                    </Input>
                    <Input 
                        id='password' 
                        label='Senha' 
                        type='password'
                        error={errors.password?.message} 
                        {...register('password')}
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