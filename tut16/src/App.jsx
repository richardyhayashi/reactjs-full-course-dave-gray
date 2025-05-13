import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
// Pages
import Home from './pages/Home';
import NewPost from './pages/NewPost';
import PostPage from './pages/PostPage';
import EditPost from './pages/EditPost';
import About from './pages/About';
import Missing from './pages/Missing';
import { useEffect } from 'react';
import useAxiosFetch from './hooks/useAxiosFetch';
import { Routes, Route } from 'react-router-dom';
import { useStoreActions } from 'easy-peasy';

function App() {
  const setPosts = useStoreActions((actions) => actions.setPosts);
  const { data, fetchError, isLoading } = useAxiosFetch(
    'http://localhost:3500/posts'
  );

  useEffect(() => {
    setPosts(data);
  }, [data, setPosts]);

  return (
    <div className="App">
      <Header title="React JS Blog" />
        <Nav />
        <Routes>
          <Route exact path="/">
            <Home
              isLoading={isLoading}
              fetchError={fetchError}
            />
          </Route>
          <Route exact path="/post" element={<NewPost />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
