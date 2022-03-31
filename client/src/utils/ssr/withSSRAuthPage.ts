import { User } from 'contexts/AuthContext';
import { verify } from 'jsonwebtoken';
import { GetServerSideProps } from 'next';
import nookies from 'nookies';

const withSSRAuthPage: GetServerSideProps = async (ctx) => {
  const { 'corrige-io:refresh_token': refresh_token } = nookies.get(ctx);

  let user: User;
  try {
    user = verify(refresh_token, process.env.REFRESH_SECRET) as User;
  } catch (error) {
    return {
      props: {},
    };
  }

  return {
    redirect: {
      destination: `/dashboard/${user.role === 1 ? 'teacher' : 'student'}`,
      permanent: false,
    },
  };
};

export default withSSRAuthPage;
