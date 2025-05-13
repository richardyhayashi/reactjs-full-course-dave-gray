import { Link, useNavigate, useParams, } from 'react-router-dom';
import { useStoreState, useStoreActions } from 'easy-peasy';

const PostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const deletePost = useStoreActions((actions) => actions.deletePost);
  const getPostById = useStoreState((state) => state.getPostById);
  const thePost = getPostById(id);

  const handleDelete = async (id) => {
    deletePost(id);
    
    navigate('/');
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