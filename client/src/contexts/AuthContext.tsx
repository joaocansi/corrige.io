import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';
import api, { ApiError } from 'services/api';

interface AuthContextData {
  user: User;
  accessToken: string;
  setAccessToken: Dispatch<SetStateAction<string>>;
  setUser: Dispatch<SetStateAction<User>>;
}

export interface User {
  name: string;
  email: string;
  role: number;
  role_id: string;
}

const AuthContext = createContext({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
  authData: AuthProviderData;
}

interface AuthProviderData {
  user: User;
  accessToken: string;
}

export interface IRefreshTokenResponse {
  access_token: string;
  refresh_token: string;
  user?: User;
}

interface RequestQueue {
  onSuccess(token: string): void;
  onFailure(error: AxiosError): void;
}

export const AuthProvider = ({ children, authData }: AuthProviderProps) => {
  const router = useRouter();

  const [user, setUser] = useState<User>(authData.user);
  const [accessToken, setAccessToken] = useState(authData.accessToken);

  let isRefreshing = false;
  let failedRequestQueue = [] as RequestQueue[];

  function signOut(auto: boolean) {
    api
      .delete('/users')
      .then(() => {
        router.push('/');
        toast.error(
          auto
            ? 'Você foi deslogado automaticamente, pois suas credenciais encontram-se erradas'
            : 'Deslogado com sucesso...'
        );
      })
      .catch(() => {
        toast.error(
          'Não foi possível deslogar pois nossos servidores se encontram offline. Caso deseje, você pode deletar os cookies do browser.'
        );
      });
  }

  useMemo(() => {
    api.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
    api.interceptors.response.use(
      (res) => res,
      (error: AxiosError) => {
        if (error.response.status === 401) {
          const originalConfig = error.config;
          const data = error.response.data as ApiError;
          if (data.message === 'session.expired') {
            if (!isRefreshing) {
              isRefreshing = true;
              api
                .post('/users/refresh')
                .then((res) => {
                  const { access_token, refresh_token } =
                    res.data as IRefreshTokenResponse;

                  setAccessToken(access_token);
                  api.defaults.headers[
                    'Authorization'
                  ] = `Bearer ${refresh_token}`;

                  failedRequestQueue.forEach((item) =>
                    item.onSuccess(accessToken)
                  );
                  failedRequestQueue = [];
                })
                .catch((err) => {
                  failedRequestQueue.forEach((item) => item.onFailure(err));
                  failedRequestQueue = [];

                  signOut(true);
                })
                .finally(() => {
                  isRefreshing = false;
                });
            }
            return new Promise((resolve, reject) => {
              failedRequestQueue.push({
                onSuccess: (token: string) => {
                  api.defaults.headers['Authorization'] = `Bearer ${token}`;
                  resolve(api(originalConfig));
                },
                onFailure: (err: AxiosError) => {
                  reject(err);
                },
              });
            });
          }
          signOut(true);
        }
        return Promise.reject(error);
      }
    );
  }, []);

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        setAccessToken,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
