import * as React from 'react';
import Box from "../components/Box";
import Post from "../components/post/Post";
import {ScrollView} from 'react-native';

export default function TabOneScreen() {
  return (
      <ScrollView>
        <Box flex="1" backgroundColor='backgroundPrimary' padding={'l'}>
          <Post/>
        </Box>
      </ScrollView>
  );
}
