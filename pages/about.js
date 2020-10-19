import Link from 'next/link';

const About = () => (
    <div>
        <h1>About</h1>
        <Link href="/">
            <a>Go to home</a>
        </Link>
        <p>I'm a JavaScript programmer</p>
        <img src="/static/javascript-logo.png" alt="JavaScript" style={{ height: "150px" }} />
    </div>
);

export default About;