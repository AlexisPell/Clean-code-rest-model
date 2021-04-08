import { useRouter } from 'next/router';
import Link from 'next/link';

const Error = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Oops... This page not found or it has never existed</h1>
      <Link href='/'>
        <a onClick={() => router.replace('/')}>Go to main page</a>
      </Link>
    </div>
  );
};

export default Error;
