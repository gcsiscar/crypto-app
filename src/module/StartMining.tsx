import React from 'react';
import {
  Input,
  Button,
  Text,
  Box,
  Container,
  Flex,
  Heading,
} from '@chakra-ui/react';
import ethBg from '../assets/images/eth_bg.png';
import btcBg from '../assets/images/btc_bg.png';

export const StartMining = () => {
  return (
    <Box
      as="section"
      color="#fff"
      bg="linear-gradient(180deg, #2B076E 0%, #0D0D2B 100%)"
      py={20}
    >
      <Container maxW="container.xl">
        <Box
          p={12}
          bg="brand.accent"
          borderRadius="1rem"
          bgImage={`url(${ethBg}), url(${btcBg})`}
          bgRepeat="no-repeat, no-repeat"
          bgPosition="left 1.25rem center, right bottom"
        >
          <Flex alignItems="center" justifyContent="space-between">
            <Box>
              <Heading size="sm" mb={4}>
                Start mining now
              </Heading>
              <Text>
                Join now with CRAPPO to get the latest news <br /> and start
                mining now
              </Text>
            </Box>
            <Box>
              <Input
                width="350px"
                placeholder="Enter your email"
                variant="flushed"
                _placeholder={{
                  color: '#fff',
                  opacity: 1,
                }}
                mr={10}
              ></Input>
              <Button bg="#fff" color="brand.primary">
                Subscribe
              </Button>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};
