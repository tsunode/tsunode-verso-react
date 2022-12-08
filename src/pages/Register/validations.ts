import * as yup from 'yup';

export const schema = yup.object({
    name: yup.string()
        .required('Nome é obrigatório'),
    surname: yup.string()
        .required('Sobrenome é obrigatório'),
    email: yup.string()
        .email('Deve ser um e-mail')
        .required('Email é obrigatório'),
    title: yup.string().required('Titulo obrigatório'),
    password: yup.string()
        .matches(/[A-Z]/, 'Deve conter ao menos 1 letra maiúscula')
        .matches(/[a-z]/, 'Deve conter ao menos 1 letra minuscula')
        .matches(/(\d)/, 'Deve conter ao menos 1 número')
        .matches(/(\W|_)/, 'Deve conter ao menos 1 caracter especial')
        .matches(/.{8,}/, 'Deve conter no mínimo 8 caracteres')
        .required(),
    passwordConfirmation: yup.string()
        .oneOf(
            [yup.ref('password')], 
            'Confirmação de senha deve ser igual a senha'
        )
        .required('Confirmação de senha é obrigatório'),
}).required();