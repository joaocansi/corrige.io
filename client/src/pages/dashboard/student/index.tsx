import { GetServerSideProps } from 'next';
import DashboardHeader from 'components/headers/DashboardHeader';
import withAuth from 'components/mockups/withAuth';
import withSSRStudentDashboard from 'utils/ssr/withSSRStudentAuthPage';

const StudentPage = () => {
  return (
    <DashboardHeader
      page="Início"
      navigations={[
        {
          name: 'Principal',
          links: [
            {
              name: 'Início',
              icon: 'fas fa-home',
              path: '/dashboard/student',
            },
            {
              name: 'Redações',
              icon: 'fas fa-sticky-note',
              path: '/dashboard/student/essays',
            },
          ],
        },
      ]}
    ></DashboardHeader>
  );
};

export default withAuth(StudentPage);
export const getServerSideProps: GetServerSideProps = withSSRStudentDashboard;
