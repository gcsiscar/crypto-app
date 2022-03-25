import Icon, { IconProps } from '@chakra-ui/icon';
import React from 'react';

export const HamburgerIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" fill="white" {...props}>
    <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
  </Icon>
);
