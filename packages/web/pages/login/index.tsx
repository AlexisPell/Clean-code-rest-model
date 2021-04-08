// public
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

interface LoginProps {
  ssrString: string;
}

const Login: NextPage<LoginProps> = ({ ssrString }) => {
  return <section>Login section</section>;
};

export function getStaticProps() {
  const ssrString = 'i m from server';
  return { props: { ssrString } };
}

export default Login;
