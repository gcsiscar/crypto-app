import React from 'react';
import {
  Button,
  Text,
  Image,
  Center,
  Box,
  Container,
  Heading,
  Flex,
} from '@chakra-ui/react';

import chartImage from '../assets/images/Chart.png';
import dashboard from '../assets/images/dashboard.png';
import table from '../assets/images/Table.png';
import bg from '../assets/images/Component_3.png';

export const Features = () => {
  return (
    <Box
      as="section"
      bg="brand.secondary"
      color="white"
      py={24}
      bgImage={bg}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="contain"
    >
      <Container maxW="container.xl">
        <Center textAlign="center" mb={24}>
          <Heading>
            Market sentiments, portfolio, and run <br /> the infrastructure of
            your choice
          </Heading>
        </Center>
        <Flex alignItems="center" justifyContent="space-between" mb={24}>
          <Box alignSelf="start" py={16}>
            <Heading size="sm" mb={6}>
              Invest Smart
            </Heading>
            <Text color="#E0E0E0" mb={8}>
              Get full statistic information about the behaviour of <br />{' '}
              buyers and sellers will help you to make the decision.
            </Text>
            <Button bg="brand.accent" px={8} py={4}>
              Learn More
            </Button>
          </Box>
          <Box>
            <Image src={chartImage} />
          </Box>
        </Flex>

        <Flex alignItems="center" justifyContent="space-between" mb={24}>
          <Box>
            <Image src={dashboard} />
          </Box>
          <Box>
            <Heading size="sm" mb={6}>
              Detailed Statistics
            </Heading>
            <Text color="#E0E0E0" mb={8}>
              View all mining related information in realtime, at any <br />
              point at any location and decide which polls you want <br /> to
              mine in.
            </Text>
            <Button bg="brand.accent">Learn More</Button>
          </Box>
        </Flex>

        <Flex alignItems="center" justifyContent="space-between">
          <Box>
            <Heading size="sm" mb={6}>
              Grow your profit and track
              <br /> your investments
            </Heading>
            <Text color="#E0E0E0" mb={8}>
              Use advanced analytical tools. Clear TradingView <br /> charts let
              you track current and historical profit <br /> investments.
            </Text>
            <Button px={8} py={4} bg="brand.accent">
              Learn More
            </Button>
          </Box>
          <Box>
            <Image src={table} />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
