import {FontAwesome} from '@expo/vector-icons';
import * as React from 'react';
import {BoxProps, useTheme} from '@shopify/restyle';
import Box from './Box';
import {Theme} from '../constants/Theme';

type Props = BoxProps<Theme>;

export const CommentIcon = (props: Props) => {
  const {accent} = useTheme<Theme>().colors;
  return (
    <Box {...props}>
      <FontAwesome name="comment-o" size={24} color={accent}/>
    </Box>
  );
};

export const LikeIcon = (props: Props) => {
  const {accent} = useTheme<Theme>().colors;
  return (
    <Box {...props}>
      <FontAwesome name="heart-o" size={24} color={accent}/>
    </Box>
  );
};
