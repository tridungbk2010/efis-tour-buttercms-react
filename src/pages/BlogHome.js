import React from 'react';
import { Link } from 'react-router-dom';
import butter from '../service/butter-client';

function BlogHome() {
  const [loaded, setLoaded] = React.useState(false);
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    fetchPosts();
    return () => {};
  }, []);

  function fetchPosts() {
    butter.post.list({ page: 1, page_size: 10 }).then(response => {
      setLoaded(true);
      setPosts(response.data.data);
    });
  }

  if (!loaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul>
        {posts.map(post => (
          <li key={post.created}>
            <Link to={`/post/${post.slug}`}>
              <div>
                <img
                  loading="lazy"
                  src={post.featured_image}
                  alt="featured_image"
                  width={480}
                />
              </div>
              <h3>{post.title}</h3>
            </Link>
            <div>Categories: {post.categories.name}</div>
            <p>{post.summary}</p>
            <p>{post.meta_description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogHome;
