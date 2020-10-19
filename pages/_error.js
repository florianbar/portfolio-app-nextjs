import Layout from '../components/Layout';

const Error = ({ statusCode }) => (
    <Layout title="Error">
        { statusCode 
            ? `Could not load your user data: status code ${statusCode}`
            : <p>Oops! We couldn't find that page.</p> }
    </Layout>
);

export default Error;