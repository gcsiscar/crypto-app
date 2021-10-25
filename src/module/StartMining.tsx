import { Input } from '@chakra-ui/input';
import {
  Box,
  Container,
  Flex,
  VStack,
  Heading,
  Spacer,
  HStack,
} from '@chakra-ui/layout';
import { Button, Text } from '@chakra-ui/react';
import React from 'react';

export const StartMining = () => {
  return (
    <Box
      as="section"
      color="white"
      bg="linear-gradient(180deg, #2B076E 0%, #0D0D2B 100%)"
      py="5em"
    >
      <Container maxW="1200px">
        <Box p="2.75em" bg="brand.accent" borderRadius="1rem">
          <Flex justifyContent="space-between">
            <VStack alignItems="start" spacing="1rem">
              <Heading
                as="h3"
                fontFamily="Rubik"
                fontWeight="700"
                fontSize="2rem"
                lineHeight="2.5rem"
              >
                Start mining now
              </Heading>
              <Text>
                Join now with CRAPPO to get the latest news <br /> and start
                mining now
              </Text>
            </VStack>
            <Spacer />
            <HStack spacing="2.5rem">
              <Input
                width="350px"
                placeholder="Enter your email"
                variant="flushed"
                _placeholder={{
                  color: 'white',
                  opacity: 1,
                }}
              ></Input>
              <Button bg="white" color="brand.primary">
                Subscribe
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};
