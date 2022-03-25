import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

const Bar = (props: BoxProps) => (
  <Box
    as="span"
    bg="white"
    display="block"
    w={6}
    p="0.1em"
    m="0.4rem auto"
    transitionTimingFunction="ease-in-out"
    transitionProperty="all"
    transitionDuration="0.3s"
    {...props}
  />
);

export const HamburgerMenu = ({ show = false }: { show?: boolean }) => {
  return (
    <Box>
      <Bar transform={show ? 'translateY(0.6rem) rotate(45deg)' : 'none'} />
      <Bar opacity={show ? 0 : 1} />
      <Bar transform={show ? 'translateY(-0.6rem) rotate(-45deg)' : 'none'} />
    </Box>
  );
};
