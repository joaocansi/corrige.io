import { GetServerSideProps } from 'next';
import { User } from 'contexts/AuthContext';
import { verify } from 'jsonwebtoken';

import React from 'react';
import nookies from 'nookies';

const Dashboard = () => <></>;

export default Dashboard;
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { 'corrige-io@refresh_token': refresh_token = '' } = nookies.get(ctx);

  let user: User;
  try {
    user = verify(refresh_token, process.env.REFRESH_SECRET) as User;
  } catch (error) {
    nookies.destroy(ctx, 'corrige-io@refresh_token', { path: '/' });
    nookies.destroy(ctx, 'corrige-io@access_token', { path: '/' });

    return {
      redirect: {
        destination: '/logar',
        permanent: true,
      },
    };
  }

  return {
    redirect: {
      destination: `/dashboard/${user.role === 1 ? 'teacher' : 'student'}`,
      permanent: false,
    },
  };
};
