import Link from 'next/link';

import Layout from '../../components/Layout';

const PostLink = ({ title }) => {
    return (
        <Link href={`/blog/post?title=${title}`}>
            <a>{title}</a>
        </Link>
    );
};

const Blog = () => {
    return (
        <Layout title="Blog">
            <ul>
                <li>
                    <PostLink title="react" />
                </li>
                <li>
                    <PostLink title="angular" />
                </li>
                <li>
                    <PostLink title="vue" />
                </li>
            </ul>
        </Layout>
    );
};

export default Blog;