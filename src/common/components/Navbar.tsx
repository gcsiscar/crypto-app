import React from 'react';
import { Link, Box, Stack } from '@chakra-ui/react';
import { CallToAction } from './CallToAction';

export const Navbar = ({
  show = false,
  offsetTop = 0,
}: {
  show?: boolean;
  offsetTop?: number;
}) => {
  return (
    <Box
      as="nav"
      bg="brand.primary"
      py={[8, null, 0]}
      w={['100%', null, 'auto']}
      position={['absolute', null, 'static']}
      top={`${offsetTop}px`}
      left={show ? '0' : '-100%'}
      mr={[0, null, 10]}
      transition={['all 0.3s ease-in-out', null, 'none']}
    >
      <Stack
        as="ul"
        listStyleType="none"
        bg="brand.primary"
        alignItems="center"
        direction={['column', null, 'row']}
        spacing={10}
      >
        <Box as="li">
          <Link href="#">Products</Link>
        </Box>
        <Box as="li">
          <Link href="#">Features</Link>
        </Box>
        <Box as="li">
          <Link href="#">About Us</Link>
        </Box>
        <Box as="li">
          <Link href="#">Contact</Link>
        </Box>

        <CallToAction display={['flex', null, 'none']} direction="column" />
      </Stack>
    </Box>
  );
};
