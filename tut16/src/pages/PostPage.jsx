import { Link, useNavigate, useParams, } from 'react-router-dom';
import { useContext } from 'react';
import api from '../api/posts';
import DataContext from '../context/DataContext.jsx';

const PostPage = () => {
  const { posts, setPosts } = useContext(DataContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const thePost = posts.find((post) => (post.id).toString() === id);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);

      const postsList = posts.filter((post) => post.id !== id);
      setPosts(postsList);

      navigate('/');
    } catch (err) {
      console.log(`Error: ${err.Message}`);
    }
  };

  return (
    <main className="PostPage">
      <article className="post">
        {thePost && (
          <>
            <h2>{thePost.title}</h2>
            <p className="postDate">{thePost.datetime}</p>
            <p className="postBody">{thePost.body}</p>
            <Link to={`/edit/${thePost.id}`}>
              <button className='editButton'>
                Edit Post
              </button>
            </Link>
            <button className='deleteButton' onClick={() => handleDelete(thePost.id)}>
              Delete Post
            </button>
          </>
        )}
        {!thePost && (
          <>
            <h2>Post Not Found</h2>
            <p>Well, that's disappointing.</p>
            <p>
              <Link to="/">Visit Out Homepage</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;