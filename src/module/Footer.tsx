import React from 'react';
import {
  Box,
  Container,
  HStack,
  Heading,
  VStack,
  Flex,
  Image,
  Text,
  Link,
} from '@chakra-ui/react';

import bitcoinIcon from '../assets/icons/bitcoin-icon.svg';
import visa from '../assets/icons/visa.svg';
import mastercard from '../assets/icons/mastercard.svg';
import { Brand } from '../common/components';

export const Footer = () => {
  const QuickLinks = ['Home', 'Products', 'About', 'Features', 'Contact'];
  const Resources = [
    'Download Whitepaper',
    'Smart Token',
    'Blockchain Explorer',
    'Crypto API',
    'Interest',
  ];
  return (
    <Box as="footer" bg="brand.primary" color="#fff" py={20}>
      <Container maxW="container.xl">
        <Flex alignItems="start" justifyContent="space-between" mb={20}>
          <Brand />
          <HStack alignItems="start" spacing={20}>
            <Box>
              <Text fontWeight="medium" mb={6}>
                Quick Link
              </Text>
              <VStack alignItems="start" spacing={4}>
                {QuickLinks.map((link, index) => (
                  <Link color="#f2f2f2" key={index}>
                    {link}
                  </Link>
                ))}
              </VStack>
            </Box>
            <Box>
              <Text fontWeight="medium" mb={6}>
                Resources
              </Text>
              <VStack alignItems="start" spacing={4}>
                {Resources.map((link, index) => (
                  <Link color="#f2f2f2" key={index}>
                    {link}
                  </Link>
                ))}
              </VStack>
            </Box>
          </HStack>

          <VStack spacing={10}>
            <Heading size="sm">
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
        </Flex>

        <Flex alignItems="center" justifyContent="space-between">
          <Text>©2021 CRYPTO. All rights reserved</Text>
          <Box>Socials</Box>
        </Flex>
      </Container>
    </Box>
  );
};
