import { User } from 'contexts/AuthContext';
import { GetServerSideProps } from 'next';
import { verify } from 'jsonwebtoken';
import nookies from 'nookies';

const withSSRTeacherDashboard: GetServerSideProps = async (ctx) => {
  const {
    'corrige-io:access_token': access_token = '',
    'corrige-io:refresh_token': refresh_token = '',
  } = nookies.get(ctx);

  let user: User;
  try {
    user = verify(refresh_token, process.env.REFRESH_SECRET) as User;
  } catch (error) {
    nookies.destroy(ctx, 'corrige-io:refresh_token', { path: '/' });
    nookies.destroy(ctx, 'corrige-io:access_token', { path: '/' });
    return {
      redirect: {
        destination: '/logar',
        permanent: false,
      },
    };
  }

  if (user.role === 0) {
    return {
      redirect: {
        destination: '/dashboard/student',
        permanent: false,
      },
    };
  }

  try {
    verify(access_token, process.env.ACCESS_SECRET);
  } catch (error) {
    return {
      props: {
        isRefreshTokenNeeded: true,
        user,
      },
    };
  }

  return {
    props: {
      isRefreshTokenNeeded: false,
      access_token,
      user,
    },
  };
};

export default withSSRTeacherDashboard;
