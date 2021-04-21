import AdminPage from 'src/pages/admin/index';
import { NextPage } from 'next';

interface SsrProps {}

const Admin: NextPage<SsrProps> = () => {
  return <AdminPage title='Online Consumer | Shop page' />;
};

export default Admin;
