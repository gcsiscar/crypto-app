import React from 'react';
import {
  Box,
  Container,
  Heading,
  Button,
  Text,
  Image,
  Flex,
  Stack,
} from '@chakra-ui/react';
import { ArrowIcon } from '../assets/icons/ArrowIcon';
import mainBg from '../assets/images/bg1.png';
import bg from '../assets/images/Component_1.png';

export const Hero = () => {
  return (
    <Box
      as="main"
      bg="brand.primary"
      color="#fff"
      py={4}
      bgImage={bg}
      bgRepeat="no-repeat"
      bgSize="contain"
      bgPosition="bottom -250px center"
    >
      <Container maxW="container.xl">
        <Flex alignItems="center" justifyContent="space-between">
          <Stack
            flexBasis="100%"
            alignItems={{ base: 'center', md: 'start' }}
            textAlign={{ base: 'center', md: 'start' }}
            justifyContent="center"
            spacing={6}
          >
            <Flex
              alignItems="center"
              borderRadius="full"
              p={1}
              bg="rgba(255,255,255,0.1)"
            >
              <Box bg="#fff" borderRadius="full" color="#000" px={4} py={1}>
                <Text fontWeight="medium">75% SAVE</Text>
              </Box>
              <Text px={2}>For the Black Friday weekend</Text>
            </Flex>

            <Heading size="lg">
              Fastest & secure platform to invest in crypto
            </Heading>
            <Text color="#E0E0E0">
              Buy and sell cryptocurrencies, trusted by 10M wallets <br />
              with over $30 billion in transactions.
            </Text>
            <Button
              bg="brand.accent"
              fontSize="lg"
              padding="1.25em 0.5em 1.25em 0.75em"
              mt={2}
              iconSpacing={6}
              rightIcon={<ArrowIcon boxSize={8} />}
            >
              Try for free
            </Button>
          </Stack>
          <Box flexBasis="100%">
            <Image src={mainBg} />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
