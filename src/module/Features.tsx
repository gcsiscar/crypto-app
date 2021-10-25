import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  VStack,
} from '@chakra-ui/layout';
import { Button, Text, Image } from '@chakra-ui/react';
import React from 'react';

import chartImage from '../assets/images/Chart.png';
import dashboard from '../assets/images/dashboard.png';
import table from '../assets/images/Table.png';

export const Features = () => {
  return (
    <>
      <Box as="section" bg="brand.secondary" color="white" py="6em">
        <Container maxW="1200px">
          <Grid
            templateColumns="repeat(2,1fr)"
            templateAreas='"title title" "content chart"'
            gap="5rem"
            placeItems="center"
          >
            <GridItem gridArea="title">
              <Heading
                textAlign="center"
                fontWeight="700"
                fontSize="40px"
                lineHeight="60px"
              >
                Market sentiments, portfolio, and run <br /> the infrastructure
                of your choice
              </Heading>
            </GridItem>
            <GridItem gridArea="content" justifySelf="start">
              <VStack alignItems="start" spacing="2rem">
                <Heading
                  as="h3"
                  fontSize="2rem"
                  fontWeight="700"
                  lineHeight="48px"
                >
                  Invest Smart
                </Heading>
                <Text lineHeight="28px" color="#E0E0E0">
                  Get full statistic information about the behaviour of <br />{' '}
                  buyers and sellers will help you to make the decision.
                </Text>
                <Button>Learn More</Button>
              </VStack>
            </GridItem>
            <GridItem gridArea="chart">
              <Image src={chartImage}></Image>
            </GridItem>
          </Grid>
        </Container>
      </Box>
      <Box as="section" bg="brand.secondary" color="white">
        <Container maxW="1200px">
          <Grid
            templateColumns="repeat(2,1fr)"
            placeItems="center"
            columnGap="6rem"
          >
            <GridItem>
              <Box>
                <Image src={dashboard} />
              </Box>
            </GridItem>
            <GridItem justifySelf="start">
              <VStack spacing="2rem" alignItems="start">
                <Heading>Detailed Statistics</Heading>
                <Text>
                  View all mining related information in realtime, at any <br />
                  point at any location and decide which polls you want <br />{' '}
                  to mine in.
                </Text>
                <Button>Learn More</Button>
              </VStack>
            </GridItem>
          </Grid>
        </Container>
      </Box>
      <Box as="section" bg="brand.secondary" color="white" py="6em">
        <Container maxW="1200px">
          <Grid
            templateColumns="repeat(2,1fr)"
            placeItems="center"
            columnGap="1rem"
          >
            <GridItem justifySelf="start">
              <VStack alignItems="start" spacing="2rem">
                <Heading>
                  Grow your profit and track <br /> your investments
                </Heading>
                <Text>
                  Use advanced analytical tools.Clear TradingView <br /> charts
                  let you track current and historical profit <br />{' '}
                  investments.
                </Text>
                <Button>LearnMore</Button>
              </VStack>
            </GridItem>
            <GridItem>
              <Box>
                <Image src={table} />
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
