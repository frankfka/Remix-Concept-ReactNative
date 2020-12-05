import Container from "../Container";
import * as React from "react";
import {Image, TouchableOpacity} from 'react-native';
import Box from "../Box";
import Text from "../Text";
import RoundedTextButton from "../RoundedTextButton";
import CircularImage from '../CircularImage';
import { LoremIpsum } from "lorem-ipsum";
import {CommentIcon, LikeIcon} from '../Icon';
import Spacer from '../Spacer';
import {BoxProps} from '@shopify/restyle';
import {Theme} from '../../constants/Theme';

const textGenerator = new LoremIpsum()

const profileName = textGenerator.generateWords(3).replaceAll(' ', '').substring(0, 10);
const postDescription = textGenerator.generateSentences(3);
const numLikes = Math.floor(Math.random() * 100);
const numComments = Math.floor(Math.random() * 100);

const followPressed = () => {
  console.log('Follow Pressed')
}
const viewCommentsPressed = () => {
  console.log('View comments pressed')
}

const TopSection = (props: BoxProps<Theme>) => {
  return (
    <Box {...props} flexDirection='row' alignItems='center'>
      <CircularImage
        size={24}
        source={{ uri: "https://source.unsplash.com/random"}}
      />
      <Text marginHorizontal='s' variant='subtext' fontWeight={'bold'} color={'textPrimary'}>{profileName}</Text>
      <RoundedTextButton label='Follow' onPress={followPressed} variant={'small'}/>
    </Box>
  )
}

const PostImage = () => {
  return (
    <Image
      source={{ uri: "https://source.unsplash.com/random" }}
      resizeMode={'contain'}
      style={{
        minHeight: 256
      }}
    />
  )
}

const BottomSection = (props: BoxProps<Theme>) => {
  return (
    <Box {...props}>
      {/*Likes & actions*/}
      <Box flexDirection='row' alignItems='center'>
        <Text variant={'body'} color={'textSecondary'}>Liked by snowdevil and {numLikes} others</Text>
        <Spacer/>
        <CommentIcon marginRight={'s'}/>
        <LikeIcon/>
      </Box>

      {/*Description*/}
      <Text marginVertical={'s'}>
        <Text variant={'body'} fontWeight={'bold'} marginRight={'s'}>
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
  )
}

export default function Post() {
  return (
    <Container variant={'section'}>
      <TopSection padding={'s'}/>
      <PostImage/>
      <BottomSection padding={'s'} paddingBottom={'m'}/>
    </Container>
  );
}
