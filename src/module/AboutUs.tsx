import {
  Box,
  Container,
  Grid,
  GridItem,
  HStack,
  Heading,
  VStack,
} from '@chakra-ui/layout';
import { Button, Image, Text } from '@chakra-ui/react';
import React from 'react';
import iconOne from '../assets/icons/Icon1.svg';
import iconTwo from '../assets/icons/Icon2.svg';
import iconThree from '../assets/icons/Icon3.svg';
import bgTwo from '../assets/images/bg2.png';

export const AboutUs = () => {
  return (
    <Box as="section" py="5rem" bg="brand.primary" color="white" zIndex="0">
      <Container maxW="1200px">
        <Grid
          templateColumns="repeat(6,1fr)"
          templateAreas={`
          "one one two two three three"
          "img img img content content content" 
        `}
          columnGap="5rem"
          rowGap="5rem"
        >
          <GridItem gridArea="one">
            <HStack spacing="2rem">
              <Image src={iconOne} />
              <Box>
                <Heading fontSize="40px" fontWeight="700">
                  $30B
                </Heading>
                <Text color="#E0E0E0" lineHeight="28px">
                  Digital Currency Exchanged
                </Text>
              </Box>
            </HStack>
          </GridItem>
          <GridItem gridArea="two">
            <HStack spacing="2rem">
              <Image src={iconTwo} />
              <Box>
                <Heading fontSize="40px" fontWeight="700">
                  10M+
                </Heading>
                <Text color="#E0E0E0" lineHeight="28px">
                  Trusted Wallets Investor
                </Text>
              </Box>
            </HStack>
          </GridItem>
          <GridItem gridArea="three">
            <HStack spacing="2rem">
              <Image src={iconThree} />
              <Box>
                <Heading fontSize="40px" fontWeight="700">
                  195
                </Heading>
                <Text color="#E0E0E0" lineHeight="28px">
                  Countries Supported
                </Text>
              </Box>
            </HStack>
          </GridItem>
          <GridItem gridArea="img">
            <Image src={bgTwo} />
          </GridItem>
          <GridItem gridArea="content" alignSelf="center">
            <VStack alignItems="start" justifyContent="center" spacing="2rem">
              <Heading lineHeight="60px">
                Why you should choose <br /> CRYPTO
              </Heading>
              <Text color="#E0E0E0" lineHeight="28px">
                Experience the next generation cryptocurrency <br /> platform.
                No financial borders, extra fees, and fake <br /> reviews.
              </Text>
              <Button>Learn More</Button>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};
