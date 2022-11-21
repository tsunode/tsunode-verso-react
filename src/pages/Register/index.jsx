import { useState } from "react";

import Input from "../../components/Input"
import { Main } from "../../styles/Main"

import tsunodeverso from "../../assets/tsunodeverso.svg"
import { Steps } from "./styles";
import { Form } from "../../styles/Form";
import { Button } from "../../styles/Button";

export const Register = () => {
    const [step, setStep] = useState(1);

    return(
        <Main>
            <img src={tsunodeverso} alt='Logo tsunode verso' /> 

            <Form>
                <fieldset>
                    <legend>Faça seu cadastro:</legend>

                    <Steps step={step}>
                        <div/>
                        <div/>
                    </Steps>

                    {
                       step === 1 ?
                            <div>
                                <Input 
                                    id='name' 
                                    name='name' 
                                    label='Name:' 
                                    type='text'  
                                />
                                <Input 
                                    id='email' 
                                    name='email' 
                                    label='E-mail:' 
                                    type='email'  
                                />
                                <Button type="button" variant='primary' onClick={() => setStep(2)}>Próximo</Button>
                            </div>
                            :
                            <div>
                                <Input 
                                    id='password' 
                                    name='password' 
                                    label='Senha:' 
                                    type='password'  
                                />
                                <Input 
                                    id='confirm-password' 
                                    name='confirmPassword' 
                                    label='Confirmar senha:' 
                                    type='password'  
                                />
                                <Button type="button" variant='inline' onClick={() => setStep(1)}>Voltar</Button>
                            </div>
                    }
                </fieldset>
            </Form>
        </Main>
    )
}