import validate, { AuthenticateValidation } from 'helpers/validations';
import { NextRouter } from 'next/router';
import toast from 'react-hot-toast';
import api from 'services/api';

interface AuthenticateUserProps {
  email: string;
  password: string;
}

export const AuthenticateUserFunction = async (
  data: AuthenticateUserProps,
  router: NextRouter
) => {
  try {
    await validate(AuthenticateValidation, data);
  } catch (error) {
    toast.error(error.message);
    return;
  }

  toast.promise(api.post('/users', data), {
    error: (error) => {
      if (error.response && error.response.data.message === 'user.notFound') {
        return 'Usuário não encontrado.';
      }
      return 'Não foi possível realizar a autênticação.';
    },
    success: () => {
      router.push('/dashboard');
      return 'Logado com sucesso!';
    },
    loading: 'Autênticando usuário, por favor aguarde...',
  });
};
