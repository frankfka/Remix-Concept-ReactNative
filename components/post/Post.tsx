import Container from '../Container';
import * as React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import Box from '../Box';
import Text from '../Text';
import RoundedTextButton from '../RoundedTextButton';
import CircularImage from '../CircularImage';
import {LoremIpsum} from 'lorem-ipsum';
import {CommentIcon, LikeIcon} from '../Icon';
import Spacer from '../Spacer';

const textGenerator = new LoremIpsum();

export default function Post() {

  const profileName = textGenerator.generateWords(3).replaceAll(' ', '').substring(0, 10);
  const postDescription = textGenerator.generateSentences(3);
  const numLikes = Math.floor(Math.random() * 100);
  const numComments = Math.floor(Math.random() * 100);

  const followPressed = () => {
    console.log('Follow Pressed');
  };
  const viewCommentsPressed = () => {
    console.log('View comments pressed');
  };

  const topSection = (
    <Box flexDirection='row' alignItems='center' padding={'s'}>
      <CircularImage
        size={24}
        source={{uri: 'https://source.unsplash.com/random'}}
      />
      <Text marginHorizontal='s' variant={'subtextBold'} color={'textPrimary'}>{profileName}</Text>
      <RoundedTextButton label='Follow' onPress={followPressed} variant={'small'}/>
    </Box>
  );

  const postImage = (
    <Image
      source={{uri: 'https://source.unsplash.com/random'}}
      resizeMode={'contain'}
      style={{
        minHeight: 256,
      }}
    />
  );

  const bottomSection = (
    <Box padding={'s'} paddingBottom={'m'}>
      {/*Likes & actions*/}
      <Box flexDirection='row' alignItems='center'>
        <Text variant={'body'} color={'textSecondary'}>Liked by snowdevil and {numLikes} others</Text>
        <Spacer/>
        <CommentIcon marginRight={'s'}/>
        <LikeIcon/>
      </Box>

      {/*Description*/}
      <Text marginVertical={'s'}>
        <Text variant={'bodyBold'} marginRight={'s'}>
          {profileName}&nbsp;&nbsp;
        </Text>
        <Text>
          {postDescription}
        </Text>
      </Text>

      {/*View comments*/}
      <Box>
        <TouchableOpacity onPress={viewCommentsPressed}>
          <Text variant={'body'} color={'textAccent'}>
            View {numComments} comments
          </Text>
        </TouchableOpacity>
      </Box>
    </Box>
  );

  return (
    <Container variant={'section'}>
      {topSection}
      {postImage}
      {bottomSection}
    </Container>
  );
}
