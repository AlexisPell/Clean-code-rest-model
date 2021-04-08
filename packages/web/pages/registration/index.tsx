// public
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

interface RegistrationProps {
  ssrString: string;
}

const Registration: NextPage<RegistrationProps> = ({ ssrString }) => {
  return <section>Registration section</section>;
};

export function getStaticProps() {
  const ssrString = 'i m from server';
  return { props: { ssrString } };
}

export default Registration;
