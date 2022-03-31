import toast from 'react-hot-toast';
import * as Yup from 'yup';
import AppError from './errors/AppError';

export default async function validate(
  schema: Yup.AnySchema,
  data: any
): Promise<void> {
  try {
    await schema.validate(data);
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      throw new AppError(error.errors[0]);
    }
    throw new AppError('Não foi possível validar as informações.');
  }
}

export const RegisterValidation = Yup.object().shape({
  name: Yup.string()
    .min(5, 'Nome precisa ter entre 5 e 64 caracteres.')
    .max(64, 'Nome precisa ter entre 5 e 64 caracteres.')
    .matches(/^[A-Za-záàâãéèêíïóôõöúçñ-\s]+$/, {
      message: 'Nome pode ter apenas letras maiúsculas e minúsculas.',
    })
    .required('Nome ainda não foi digitado.'),
  email: Yup.string()
    .email('E-mail encontra-se incorreto.')
    .required('E-mail ainda não foi digitado.'),
  password: Yup.string()
    .min(6, 'Senha precisa ter entre 6 e 24 caracteres.')
    .max(24, 'Senha precisa ter entre 6 e 24 caracteres.')
    .matches(/^[A-Za-z0-9-\s]+$/, {
      message:
        'Senha pode ter apenas letras maiúsculas e minúsculas e números.',
    })
    .required('Senha ainda não foi digitada.'),
});

export const AuthenticateValidation = Yup.object().shape({
  email: Yup.string()
    .email('E-mail encontra-se incorreto.')
    .required('E-mail ainda não foi digitado.'),
  password: Yup.string()
    .min(6, 'Senha precisa ter entre 6 e 24 caracteres.')
    .max(24, 'Senha precisa ter entre 6 e 24 caracteres.')
    .matches(/^[A-Za-z0-9-\s]+$/, {
      message:
        'Senha pode ter apenas letras maiúsculas e minúsculas e números.',
    })
    .required('Senha ainda não foi digitada.'),
});
