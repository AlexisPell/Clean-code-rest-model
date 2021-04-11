import { useRouter } from 'next/router';
import Link from 'next/link';

import NotFound from 'src/pages/404/index';

const Error = () => {
  return <NotFound />;
};

export default Error;
