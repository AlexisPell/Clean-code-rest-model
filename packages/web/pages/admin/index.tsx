// private
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

interface AdminProps {
  ssrString: string;
}

const Admin: NextPage<AdminProps> = ({ ssrString }) => {
  return <section>admin section</section>;
};

export function getStaticProps() {
  const ssrString = 'i m from server';
  return { props: { ssrString } };
}

export default Admin;
