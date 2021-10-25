import {
  Box,
  Container,
  Grid,
  VStack,
  HStack,
  Heading,
} from '@chakra-ui/layout';
import { Button, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { ArrowIcon } from '../assets/icons/ArrowIcon';
import mainBg from '../assets/images/bg1.png';

export const Main = () => {
  return (
    <Box
      as="main"
      bg="brand.primary"
      color="white"
      py="2rem"
      position="relative"
      overflow="hidden"
    >
      <Container maxW="1200px">
        <Grid templateColumns="repeat(2, 1fr)" columnGap="0.5rem">
          <VStack alignItems="start" justifyContent="center" spacing="1.5rem">
            <Box bg="rgba(255,255,255,0.1)" borderRadius="2rem" p="0.25em">
              <HStack spacing="1rem" mr="10px">
                <Box
                  bg="white"
                  color="black"
                  borderRadius="2rem"
                  px="1em"
                  py="0.25em"
                >
                  <Text fontWeight="500">75% SAVE</Text>
                </Box>
                <Box>
                  <Text> For the Black Friday weekend</Text>
                </Box>
              </HStack>
            </Box>

            <Heading fontSize="4rem" fontWeight="700">
              Fastest & secure platform to invest in crypto
            </Heading>
            <Text color="#E0E0E0">
              Buy and sell cryptocurrencies, trusted by 10M wallets <br />
              with over $30 billion in transactions.
            </Text>
            <Button
              iconSpacing={6}
              fontSize="lg"
              padding="1.5em 0.75em 1.5em 1.5em"
              rightIcon={<ArrowIcon boxSize={8} />}
            >
              Try for free
            </Button>
          </VStack>
          <Box>
            <Image src={mainBg} />
          </Box>
        </Grid>
      </Container>
      <Box
        width="120px"
        height="1000px"
        bg="linear-gradient(180.09deg, rgba(255, 255, 255, 0) 0.49%, rgba(255, 255, 255, 0.04) 39.06%, rgba(255, 255, 255, 0) 99.92%);"
        position="absolute"
        bottom="-450px"
        right="300px"
        transform="rotate(-120deg)"
      ></Box>
      <Box
        width="120px"
        height="1000px"
        bg="linear-gradient(180.09deg, rgba(255, 255, 255, 0) 0.49%, rgba(255, 255, 255, 0.04) 39.06%, rgba(255, 255, 255, 0) 99.92%);"
        position="absolute"
        bottom="-450px"
        right="820px"
        transform="rotate(-120deg)"
      ></Box>
    </Box>
  );
};
