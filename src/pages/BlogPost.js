import React from 'react';
import { Helmet } from 'react-helmet';
import butter from '../service/butter-client';

const BlogPost = ({ match }) => {
  const [loaded, setLoaded] = React.useState(false);
  const [post, setPost] = React.useState(false);
  React.useEffect(() => {
    let slug = match.params.slug;

    butter.post.retrieve(slug).then(resp => {
      setLoaded(true);
      setPost(resp.data.data);
    });
    return () => {};
  }, [match.params.slug]);

  if (!loaded) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{post.seo_title}</title>
        <meta name="description" content={post.meta_description} />
        <meta name="og:image" content={post.featured_image} />
      </Helmet>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    </div>
  );
};

export default BlogPost;
