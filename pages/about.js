import Link from 'next/link';

import Layout from '../components/Layout';

const About = () => (
    <Layout title="About">
        <p>I'm a JavaScript programmer</p>
        <img src="/static/javascript-logo.png" alt="JavaScript" style={{ height: "150px" }} />
    </Layout>
);

export default About;