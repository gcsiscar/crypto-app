import {
  Box,
  Container,
  Grid,
  GridItem,
  HStack,
  Heading,
  VStack,
  Flex,
  Spacer,
  Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';

import cryptoLogo from '../assets/images/crypto-logo.png';
import bitcoinIcon from '../assets/icons/bitcoin-icon.svg';
import visa from '../assets/icons/visa.svg';
import mastercard from '../assets/icons/mastercard.svg';

export const Footer = () => {
  return (
    <Box as="footer" bg="brand.primary" color="white" py="5em">
      <Container maxW="1200px">
        <Grid
          templateColumns="repeat(4,auto)"
          placeItems="start"
          columnGap="2rem"
        >
          <GridItem>
            <HStack spacing="1rem">
              <Box>
                <Image src={cryptoLogo} />
              </Box>
              <Heading
                fontSize="1.125rem"
                lineHeight="22px"
                textTransform="uppercase"
              >
                Crypto
              </Heading>
            </HStack>
          </GridItem>
          <GridItem justifySelf="center">
            <VStack spacing="2rem" alignItems="start">
              <Heading
                fontFamily="Rubik"
                fontWeight="500"
                fontSize="1.25rem"
                lineHeight="1.5"
              >
                Quick Link
              </Heading>
              <VStack alignItems="start">
                <Text fontSize="1rem" lineHeight="38px" color="#F2F2F2">
                  Home
                </Text>
                <Text fontSize="1rem" lineHeight="38px" color="#F2F2F2">
                  Products
                </Text>
                <Text fontSize="1rem" lineHeight="38px" color="#F2F2F2">
                  About
                </Text>
                <Text fontSize="1rem" lineHeight="38px" color="#F2F2F2">
                  Features
                </Text>
                <Text fontSize="1rem" lineHeight="38px" color="#F2F2F2">
                  Contact
                </Text>
              </VStack>
            </VStack>
          </GridItem>
          <GridItem justifySelf="center">
            <VStack spacing="2rem" alignItems="start">
              <Heading
                fontFamily="Rubik"
                fontWeight="500"
                fontSize="1.25rem"
                lineHeight="1.5"
              >
                Resources
              </Heading>
              <VStack alignItems="start">
                <Text fontSize="1rem" lineHeight="38px" color="#F2F2F2">
                  Download Whitepapper
                </Text>
                <Text fontSize="1rem" lineHeight="38px" color="#F2F2F2">
                  Smart Token
                </Text>
                <Text fontSize="1rem" lineHeight="38px" color="#F2F2F2">
                  Blockchain Explorer
                </Text>
                <Text fontSize="1rem" lineHeight="38px" color="#F2F2F2">
                  Crypto API
                </Text>
                <Text fontSize="1rem" lineHeight="38px" color="#F2F2F2">
                  Interest
                </Text>
              </VStack>
            </VStack>
          </GridItem>
          <GridItem justifySelf="end">
            <VStack spacing="2.5rem">
              <Heading>
                We accept following <br /> payment systems
              </Heading>
              <HStack spacing="1.5rem">
                <Box
                  bg="rgba(224, 224, 224, 0.05)"
                  borderRadius="0.5rem"
                  px="1.5rem"
                  py="0.5rem"
                >
                  <Image src={visa} />
                </Box>
                <Box
                  px="1.5rem"
                  py="0.5rem"
                  bg="rgba(224, 224, 224, 0.05)"
                  borderRadius="0.5rem"
                >
                  <Image src={mastercard} />
                </Box>
                <Box
                  px="1.5rem"
                  py="0.5rem"
                  bg="rgba(224, 224, 224, 0.05)"
                  borderRadius="0.5rem"
                >
                  <Image h="40px" w="40px" src={bitcoinIcon} />
                </Box>
              </HStack>
            </VStack>
          </GridItem>
        </Grid>

        <Box mt="7rem">
          <Flex>
            <Text>©2021 CRAPPO. All rights reserved</Text>
            <Spacer />
            <Box>Socials</Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};
