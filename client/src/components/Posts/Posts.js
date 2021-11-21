// React
import React from 'react';

// Redux
import { useSelector } from 'react-redux';

// Material-UI
import useStyles from './styles';

// Components
import Post from './Post/Post';

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);

  return (
    <>
      <h1>POSTS</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;