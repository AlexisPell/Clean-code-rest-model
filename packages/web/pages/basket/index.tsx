// private
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

interface BasketProps {
  ssrString: string;
}

const Basket: NextPage<BasketProps> = ({ ssrString }) => {
  return <section>Basket section</section>;
};

export function getStaticProps() {
  const ssrString = 'i m from server';
  return { props: { ssrString } };
}

export default Basket;
