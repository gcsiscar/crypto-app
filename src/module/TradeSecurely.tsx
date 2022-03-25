import { Input } from '@chakra-ui/input';
import { Box, Container, Heading, Flex, Center } from '@chakra-ui/layout';
import { Button, Text, VStack, HStack, Stack } from '@chakra-ui/react';
import { Select } from '@chakra-ui/select';
import React from 'react';
import bitcoinIcon from '../assets/icons/bitcoin-icon.svg';
import etheriumIcon from '../assets/icons/etherium-icon.svg';
import litecoinIcon from '../assets/icons/litecoin-icon.svg';
import { CryptoCard } from '../common/components';
import { CryptoCardProps } from '../common/components/CryptoCard';

export const TradeSecurely = () => {
  const CryptoOptions: CryptoCardProps[] = [
    {
      name: 'Bitcoin',
      abbr: 'BTC',
      icon: bitcoinIcon,
      desc: 'Digital currency in which a record of transactions is maintained.',
    },
    {
      name: 'Etherium',
      abbr: 'ETH',
      icon: etheriumIcon,
      desc: 'Blockchain technology to create and run decentralized digital applications.',
    },
    {
      name: 'Litecoin',
      abbr: 'LTC',
      icon: litecoinIcon,
      desc: 'Cryptocurrency that enables instant payments to anyone in the world.',
    },
  ];
  return (
    <Box as="section">
      <Box bg="brand.primary" color="#fff" py={24} position="relative">
        <Container maxW="container.xl">
          <VStack textAlign="center" spacing={6} mb="100px">
            <Heading>Check how much you can earn</Heading>
            <Text color="#E0E0E0">
              Lets check your hash rate to see how much you will earn today.{' '}
              <br /> Exercitation veniam consequat sunt nostrud amet.
            </Text>
          </VStack>
          <Center>
            <Box
              bg="#fff"
              borderRadius="1rem"
              p={12}
              position="absolute"
              bottom="-200px"
              filter="drop-shadow(0px 20px 200px rgba(57, 23, 119, 0.05))"
            >
              <VStack spacing={20}>
                <HStack spacing={8}>
                  <Input
                    w="400px"
                    variant="flushed"
                    color="brand.primary"
                    placeholder="Enter your hash rate"
                    _placeholder={{
                      color: 'brand.primary',
                      opacity: 1,
                    }}
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
                  <Button bg="brand.accent" px={8}>
                    Calculate
                  </Button>
                </HStack>
                <Flex direction="column" alignItems="start" alignSelf="start">
                  <Text
                    color="brand.accent"
                    textTransform="uppercase"
                    fontWeight="medium"
                    letterSpacing="0.04em"
                    mb={4}
                  >
                    Estimated 24 Hour Revenue:
                  </Text>
                  <Heading
                    color="brand.primary"
                    size="sm"
                    letterSpacing="0.04em"
                    mb={1}
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
                </Flex>
              </VStack>
            </Box>
          </Center>
        </Container>
      </Box>
      <Box
        bg="linear-gradient(180deg, #F8F9FB 0%, #FAFBFF 100%)"
        pt={80}
        pb={24}
      >
        <Container maxW="container.xl">
          <Center textAlign="center" mb={16}>
            <Heading color="brand.primary">
              Trade securely and market the high <br />
              growth cryptocurrencies.
            </Heading>
          </Center>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={10}
          >
            {CryptoOptions.map((option, index) => (
              <CryptoCard
                flexBasis="100%"
                key={index}
                name={option.name}
                abbr={option.abbr}
                icon={option.icon}
                desc={option.desc}
              />
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};
