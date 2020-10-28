import Link from 'next/link';

import Layout from '../../components/Layout';

const PostLink = ({ title, slug }) => {
    return (
        <Link as={`/blog/${slug}`} href={`/blog/post?title=${title}`}>
            <a>{title}</a>
        </Link>
    );
};

const Blog = () => {
    return (
        <Layout title="Blog">
            <ul>
                <li>
                    <PostLink title="React Post" slug="react-post" />
                </li>
                <li>
                    <PostLink title="Angular Post" slug="angular-post" />
                </li>
                <li>
                    <PostLink title="Vue Post" slug="vue-post" />
                </li>
            </ul>
        </Layout>
    );
};

export default Blog;