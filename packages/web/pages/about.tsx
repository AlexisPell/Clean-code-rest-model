import AboutPage from 'src/pages/about/';
import { NextPage } from 'next';

interface SsrProps {}

const About: NextPage<SsrProps> = () => {
  return <AboutPage title='Online Consumer | About this app' />;
};

export default About;
