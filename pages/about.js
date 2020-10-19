import Layout from '../components/Layout';

const About = ({ user }) => {
    return (
        <Layout title="About">
            <p>{user.name}</p>
            <p>I'm a JavaScript programmer</p>
            <img 
                src={user.avatar_url} 
                alt={user.name}  
                style={{ height: "150px" }} 
            />
        </Layout>
    );
};

About.getInitialProps = async (context) => {
    const response = await fetch('https://api.github.com/users/florianbar');
    const data = await response.json();
    return { user: data };
};

export default About;