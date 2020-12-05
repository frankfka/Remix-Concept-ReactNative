import {
  useRestyle,
  spacing,
  border,
  backgroundColor,
  SpacingProps,
  BorderProps,
  BackgroundColorProps, VariantProps,
} from '@shopify/restyle';
import {Theme} from "../constants/Theme";
import Container from "./Container";
import Text from "./Text";
import {TouchableOpacity} from "react-native";
import React from "react";

const restyleFunctions = [spacing, backgroundColor];
type Props = VariantProps<Theme, 'roundedButtonVariants'> &
  SpacingProps<Theme> &
  BackgroundColorProps<Theme> & {
  onPress: () => void;
  label: string;
};

const RoundedTextButton = ({onPress, label, ...rest}: Props) => {
  const props = useRestyle(restyleFunctions, rest);

  return (
    <TouchableOpacity onPress={onPress}>
      <Container paddingHorizontal='m' borderColor={'borderAccent'} {...props} variant={'roundedButton'} >
        <Text variant={ rest.variant == 'small' ? 'subtext' : 'body' } color='textAccent'>
          {label}
        </Text>
      </Container>
    </TouchableOpacity>
  );
};

export default RoundedTextButton;
