import { withRouter } from 'next/router';

import Layout from '../../components/Layout';

const Post = ({ router }) => {
    return (
        <Layout title={router.query.title}>
            <p>Lorem ipsum</p>
        </Layout>
    );
};

export default withRouter(Post);