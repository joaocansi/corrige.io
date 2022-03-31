import {
  AuthProvider,
  IRefreshTokenResponse,
  User,
} from 'contexts/AuthContext';
import { useRouter } from 'next/router';
import React from 'react';
import api from 'services/api';
import useSWR from 'swr';

interface WithAuthProps {
  isRefreshTokenNeeded: boolean;
  user: User;
  accessToken: string;
}

const withAuth =
  (Wrapped: React.FC<WithAuthProps>) => (props: WithAuthProps) => {
    const router = useRouter();

    if (props.isRefreshTokenNeeded) {
      const { data, error } = useSWR(
        '/users',
        async (url) => (await api.patch(url)).data as IRefreshTokenResponse
      );

      if (error) {
        router.push('/logar');
        return <></>;
      }

      if (!data) {
        return <></>;
      }

      return (
        <AuthProvider
          authData={{
            user: data.user,
            accessToken: data.access_token,
          }}
        >
          <Wrapped {...props} {...api} />
        </AuthProvider>
      );
    }

    return (
      <AuthProvider
        authData={{
          user: props.user,
          accessToken: props.accessToken,
        }}
      >
        <Wrapped {...props} {...api} />
      </AuthProvider>
    );
  };

export default withAuth;
