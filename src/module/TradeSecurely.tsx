import { Input } from '@chakra-ui/input';
import {
  Box,
  Container,
  VStack,
  Heading,
  HStack,
  Grid,
  GridItem,
  Flex,
  Circle,
} from '@chakra-ui/layout';
import { Button, Text, Image } from '@chakra-ui/react';
import { Select } from '@chakra-ui/select';
import React from 'react';
import bitcoinIcon from '../assets/icons/bitcoin-icon.svg';
import etheriumIcon from '../assets/icons/etherium-icon.svg';
import litecoinIcon from '../assets/icons/litecoin-icon.svg';
import arrowIcon from '../assets/icons/arrow-icon.svg';

export const TradeSecurely = () => {
  return (
    <>
      <Box
        as="section"
        bg="brand.primary"
        color="white"
        py="5rem"
        position="relative"
        _after={{
          content: `" "`,
          padding: '4rem',
          display: 'block',
        }}
      >
        <Container maxW="1200px">
          <VStack textAlign="center" spacing="4rem">
            <VStack spacing="1.5rem">
              <Heading>Check how much you can earn</Heading>
              <Text color="#E0E0E0" lineHeight="28px">
                Lets check your hash rate to see how much you will earn today.{' '}
                <br /> Exercitation veniam consequat sunt nostrud amet.
              </Text>
            </VStack>
            <Box
              bg="white"
              borderRadius="1rem"
              p="3rem"
              position="absolute"
              top="200px"
              filter="drop-shadow(0px 20px 200px rgba(57, 23, 119, 0.05))"
            >
              <VStack spacing="5rem">
                <HStack spacing="2rem">
                  <Input
                    placeholder="Enter your hash rate"
                    _placeholder={{
                      color: 'brand.primary',
                      opacity: '1',
                    }}
                    width="400px"
                    variant="flushed"
                    color="brand.primary"
                    borderBottom="1px solid #E0E0E0"
                  />
                  <Select
                    variant="flushed"
                    width="200px"
                    color="brand.primary"
                    defaultValue="option1"
                  >
                    <option value="option1">TH/s</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                  <Button px="2rem">Calculate</Button>
                </HStack>
                <VStack alignItems="start" alignSelf="start">
                  <Text
                    color="brand.accent"
                    textTransform="uppercase"
                    fontWeight="500"
                    letterSpacing="0.04em"
                  >
                    Estimated 24 Hour Revenue:
                  </Text>
                  <Heading
                    color="brand.primary"
                    fontSize="2em"
                    fontWeight="700"
                    letterSpacing="0.04em"
                  >
                    0.055 130 59 ETH{' '}
                    <Box as="span" color="brand.accent">
                      ($1275)
                    </Box>
                  </Heading>
                  <Text color="#828282">
                    Revenue will change based on mining difficulty and Ethereum
                    price.
                  </Text>
                </VStack>
              </VStack>
            </Box>
          </VStack>
        </Container>
      </Box>
      <Box
        as="section"
        bg="linear-gradient(180deg, #F8F9FB 0%, #FAFBFF 100%)"
        _before={{
          display: 'block',
          content: `""`,
          padding: '6em',
        }}
        py="5em"
      >
        <Container maxW="1200px">
          <Grid
            templateColumns="repeat(3,1fr)"
            templateAreas={`"title title title" "bitcoin ethereum litecoin"`}
            placeItems="center"
            textAlign="center"
            rowGap="4rem"
            columnGap="3rem"
          >
            <GridItem gridArea="title">
              <Heading color="brand.primary" lineHeight="60px">
                Trade securely and market the high <br />
                growth cryptocurrencies.
              </Heading>
            </GridItem>
            <GridItem gridArea="bitcoin">
              <Box
                bg="brand.secondary"
                borderRadius="1rem"
                color="white"
                backdropFilter="blur(250px)"
                py="2.5em"
                px="1.5em"
              >
                <Flex
                  direction="column"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box marginBottom="2.5rem">
                    <Image src={bitcoinIcon} />
                  </Box>
                  <Box
                    marginBottom="1rem"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <Box
                      as="h1"
                      fontSize="2rem"
                      fontFamily="Rubik"
                      fontWeight="700"
                      lineHeight="1.5rem"
                    >
                      Bitcoin
                    </Box>
                    <Box
                      as="p"
                      fontSize="1.125rem"
                      fontFamily="Rubik"
                      fontWeight="500"
                      lineHeight="1.5"
                      opacity="0.7"
                    >
                      BTC
                    </Box>
                  </Box>
                  <Text marginBottom="1.5rem" lineHeight="28px">
                    Digital currency in which a record of transactions is
                    maintained.
                  </Text>
                  <Button py="2rem">Start mining</Button>
                </Flex>
              </Box>
            </GridItem>
            <GridItem gridArea="ethereum">
              <Box
                bg="white"
                borderRadius="1rem"
                color="brand.primary"
                boxShadow="0px 5px 10px -8px rgba(0,0,0,0.3)"
                py="2.5em"
                px="1.5em"
              >
                <Flex
                  direction="column"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box marginBottom="2.5rem">
                    <Image src={etheriumIcon} />
                  </Box>
                  <Box
                    marginBottom="1rem"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <Box
                      as="h1"
                      fontSize="2rem"
                      fontFamily="Rubik"
                      fontWeight="700"
                      lineHeight="1.5rem"
                    >
                      Ethereum
                    </Box>
                    <Box
                      as="p"
                      fontSize="1.125rem"
                      fontFamily="Rubik"
                      fontWeight="500"
                      lineHeight="1.5"
                      opacity="0.7"
                    >
                      ETC
                    </Box>
                  </Box>
                  <Text marginBottom="1.5rem" lineHeight="28px">
                    Blockchain technology to create and run decentralized
                    digital applications.
                  </Text>
                  <Circle
                    width="64px"
                    height="64px"
                    border="2px solid rgba(43, 7, 110, 0.2);"
                  >
                    <Image src={arrowIcon} width="100%" height="100%" />
                  </Circle>
                </Flex>
              </Box>
            </GridItem>
            <GridItem gridArea="litecoin">
              <Box
                bg="white"
                borderRadius="1rem"
                color="brand.primary"
                boxShadow="0px 5px 10px -8px rgba(0,0,0,0.3)"
                py="2.5em"
                px="1.5em"
              >
                <Flex
                  direction="column"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box marginBottom="2.5rem">
                    <Image src={litecoinIcon} />
                  </Box>
                  <Box
                    marginBottom="1rem"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <Box
                      as="h1"
                      fontSize="2rem"
                      fontFamily="Rubik"
                      fontWeight="700"
                      lineHeight="1.5rem"
                    >
                      Litecoin
                    </Box>
                    <Box
                      as="p"
                      fontSize="1.125rem"
                      fontFamily="Rubik"
                      fontWeight="500"
                      lineHeight="1.5"
                      opacity="0.7"
                    >
                      LTC
                    </Box>
                  </Box>
                  <Text marginBottom="1.5rem" lineHeight="28px">
                    Cryptocurrency that enables instant payments to anyone in
                    the world.
                  </Text>
                  <Circle
                    width="64px"
                    height="64px"
                    border="2px solid rgba(43, 7, 110, 0.2);"
                  >
                    <Image src={arrowIcon} width="100%" height="100%" />
                  </Circle>
                </Flex>
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
