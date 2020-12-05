import {Theme} from "../constants/Theme";
import {
  createRestyleComponent,
  createVariant,
  VariantProps,
} from '@shopify/restyle';
import React from "react";
import Box from "./Box";

type Props = VariantProps<Theme, 'containerVariants'> & React.ComponentProps<typeof Box>
const Container = createRestyleComponent<Props, Theme>(
  [
    createVariant({themeKey: 'containerVariants'})
  ],
  Box
)

export default Container
