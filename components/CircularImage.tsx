import {Image, ImageSourcePropType} from "react-native";
import * as React from "react";

interface Props {
  source: ImageSourcePropType,
  size: number
}
const CircularImage = ({source, size}: Props) => {
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

export default CircularImage
