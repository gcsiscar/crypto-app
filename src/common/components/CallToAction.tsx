import React from 'react';
import {
  Button,
  Link,
  Stack,
  StackDivider,
  StackProps,
} from '@chakra-ui/react';

export const CallToAction = (props: StackProps) => {
  return (
    <Stack
      display={['none', null, 'flex']}
      spacing={[0, null, 8]}
      alignItems="center"
      direction="row"
      divider={
        <StackDivider
          display={['none', null, 'block']}
          borderColor="#f2f2f2"
          opacity={0.3}
        />
      }
      {...props}
    >
      <Link display={['none', null, 'block']}>Login</Link>
      <Button
        background="brand.accent"
        px={6}
        py={4}
        _hover={{
          bg: '#fff',
          color: 'brand.primary',
        }}
      >
        Register
      </Button>
    </Stack>
  );
};
