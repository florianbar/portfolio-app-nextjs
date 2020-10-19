import Layout from '../components/Layout';
import Error from './_error';

const About = ({ user, statusCode }) => {
    let content = (
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
    
    if (statusCode) {
        content = <Error statusCode={statusCode} />;
    }

    return content;
};

About.getInitialProps = async (context) => {
    const response = await fetch('https://api.github.com/users/florianbar');
    const statusCode = response.status > 200 ? response.status : false;
    const data = await response.json();
    return { 
        user: data, 
        statusCode 
    };
};

export default About;