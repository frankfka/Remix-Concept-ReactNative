import * as React from 'react';
import Box from "../components/Box";
import Post from "../components/post/Post";

export default function TabOneScreen() {
  return (
    <Box flex="1" backgroundColor='backgroundPrimary'>
      <Post/>
    </Box>
  );
}
