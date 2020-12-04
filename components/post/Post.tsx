import RoundedBorderContainer from "../RoundedBorderContainer";
import * as React from "react";
import {Button, Image, ImageSourcePropType, TouchableOpacity} from 'react-native';
import Box from "../Box";
import Text from "../Text";
import {backgroundColor} from "@shopify/restyle";
import {AntDesign, FontAwesome, Ionicons} from "@expo/vector-icons";

interface CircleImageProps {
  source: ImageSourcePropType,
  size: number
}
const CircleImage = ({source, size}: CircleImageProps) => {
  return (
    <Image
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
      }}
      resizeMode={'cover'}
      source={source}
    />
  )
}

interface ButtonProps {
  title: string,
  onPress: () => void,
}

const RoundedButton = ({ title, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <RoundedBorderContainer paddingHorizontal='m' variant='button'>
        <Text variant='subtext' color='textAccent'>
          {title}
        </Text>
      </RoundedBorderContainer>
    </TouchableOpacity>
  )
}

export default function Post() {
  return (
    <RoundedBorderContainer>
      <Box flexDirection='row' alignItems='center' padding='s'>
        <CircleImage
          size={24}
          source={{ uri: "https://s-media-cache-ak0.pinimg.com/736x/43/cd/6e/43cd6e82491bf130d97624c198ee1a3f--funny-movie-quotes-funny-movies.jpg"}}
        />
        <Text marginHorizontal='s' variant='subtext' fontWeight={'bold'} color={'textPrimary'}>frankjia</Text>
        <RoundedButton title='Follow' onPress={() => {console.log('Follow Pressed')}}/>
      </Box>
      <Image
        source={{ uri: "https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/Champion-x-Super-Mario-Bros-Toad-Light-Pink-Hoodie-_335096-front-US.jpg" }}
        resizeMode={'contain'}
        style={{
          minHeight: 256
        }}
      />
      <Box>
        <Box flexDirection='row' alignItems='center'>
          <Text marginHorizontal='s' variant={'body'} color={'textSecondary'}>Liked by snowdevil and 27 others</Text>
          <Box flex={1}/>
          <Box marginHorizontal={'s'}>
            <FontAwesome name="comment-o" size={24} color="green" />
          </Box>
          <FontAwesome name="heart-o" size={24} color="green" />
        </Box>
        <Box>
          <Text>
            <Text variant={'body'} fontWeight={'bold'} marginRight={'s'}>
              frankjia
            </Text>
            <Text>
              night time adventures #vans #santacruz
            </Text>
          </Text>
        </Box>
        <Box>
          <TouchableOpacity>
            <Text variant={'subtext'} color={'textAccent'}>
              View 2 comments
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>
    </RoundedBorderContainer>
  );
}
