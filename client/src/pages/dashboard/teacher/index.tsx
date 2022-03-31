import withAuth from 'components/mockups/withAuth';
import { GetServerSideProps } from 'next';
import withSSRTeacherDashboard from 'utils/ssr/withSSRTeacherAuthPage';

const TeacherPage = () => <h1>Teacher Page</h1>;

export default withAuth(TeacherPage);
export const getServerSideProps: GetServerSideProps = withSSRTeacherDashboard;
