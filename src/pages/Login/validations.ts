import * as yup from 'yup';

export const schema = yup
  .object({
    email: yup
      .string()
      .email('Deve ser um e-mail')
      .required('Email é obrigatório'),
    password: yup.string().required('A senha é obrigatória'),
  })
  .required();
