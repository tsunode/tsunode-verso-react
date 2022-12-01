import { useState } from "react";
import { useForm } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from "../../components/Input"
import { schema } from "./validations";
import { IRegisterData } from "./types";

import { Steps } from "./styles";
import { Main } from "../../styles/Main"
import { Button } from "../../styles/Button";
import { FormStep } from "../../styles/FormStep";

import tsunodeverso from "../../assets/tsunodeverso.svg"

export const Register = () => {
    const [step, setStep] = useState(1);
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<IRegisterData>({
        resolver: yupResolver(schema)
    });

    function registerUser(data: IRegisterData) {
        console.log(data);
    }

    console.log(errors);

    return(
        <Main>
            <img src={tsunodeverso} alt='Logo tsunode verso' /> 

            <FormStep step={step} onSubmit={handleSubmit(registerUser)}>
                <fieldset>
                    <legend>Faça seu cadastro:</legend>

                    <Steps step={step}>
                        <div/>
                        <div/>
                    </Steps>

                    <p>Preencha os seus dados pessoais</p>

                    <div className="steps-container">
                        <div>
                            <Input 
                                id='name' 
                                label='Name:' 
                                type='text'  
                                error={errors.name?.message}
                                {...register('name')}
                            />
                            <Input 
                                id='surname' 
                                label='Sobrenome:' 
                                type='text'
                                error={errors.surname?.message}
                                {...register('surname')}
                            />
                            <Input 
                                id='title' 
                                label='Título (opcional):' 
                                type='text'
                                error={errors.title?.message}
                                {...register('title')}
                            />
                            <Button type="button" variant='primary' onClick={() => setStep(2)}>Próximo</Button>
                        </div>
                        
                        <div>
                            <Input 
                                id='email' 
                                label='E-mail:' 
                                type='email' 
                                error={errors.email?.message}
                                {...register('email')} 
                            />
                            <Input 
                                id='password' 
                                label='Senha:' 
                                type={showPassword ? 'text' : 'password'}
                                error={errors.password?.message} 
                                {...register('password')} 
                            >
                                <Button 
                                    type="button" 
                                    variant="inline" 
                                    width="auto"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                  {showPassword ? 
                                    <AiFillEyeInvisible/> :  <AiFillEye /> }  
                                </Button>
                            </Input>
                            <Input 
                                id='confirm-password' 
                                label='Confirmar senha:' 
                                type='text'  
                                error={errors.confirmPassword?.message}
                                {...register('confirmPassword')}
                            />
                            <Button type="submit" variant='primary'>Concluir</Button>
                            <Button type="button" variant='inline' onClick={() => setStep(1)}>Voltar</Button>
                        </div>
                    </div>
                    
                </fieldset>
            </FormStep>
        </Main>
    )
}