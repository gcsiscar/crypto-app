import React from 'react';
import { Heading, Link, Stack } from '@chakra-ui/react';
import { CryptoLogo } from '../../assets/icons/CryptoLogo';

export const Brand = () => {
  return (
    <Link href="#">
      <Stack direction="row" alignItems="center" spacing={4}>
        <CryptoLogo boxSize={8} />
        <Heading fontSize="lg" textTransform="uppercase">
          Crypto
        </Heading>
      </Stack>
    </Link>
  );
};
