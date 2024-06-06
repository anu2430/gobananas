import React, { useEffect, useState } from 'react';
import { fetchPosts } from './api';
import SearchBar from './components/SearchBar';
import PostList from './components/PostList';
import { Container, Typography } from '@mui/material';

function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
    };
    getPosts();
  }, []);

  const filteredPosts = posts.filter(post =>
      post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
      <Container>
        <Typography variant="h4" gutterBottom>
          GoBananas Assignment
        </Typography>
        <SearchBar search={search} setSearch={setSearch} />
        <PostList posts={filteredPosts} />
      </Container>
  );
}

export default App;
