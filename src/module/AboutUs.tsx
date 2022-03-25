import {
  Button,
  Flex,
  Image,
  Text,
  Box,
  Container,
  Heading,
} from '@chakra-ui/react';
import React from 'react';
import { GlobeIcon } from '../assets/icons/GlobeIcon';
import { GraphIcon } from '../assets/icons/GraphIcon';
import { ProfileIcon } from '../assets/icons/ProfileIcon';
import bgTwo from '../assets/images/bg2.png';
import { NumbersCard } from '../common/components/NumbersCard';
import bg from '../assets/images/Component_2.png';

export const AboutUs = () => {
  return (
    <Box
      as="section"
      py={24}
      bg="brand.primary"
      color="#fff"
      backgroundImage={bg}
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom center"
    >
      <Container maxW="container.xl">
        <Flex alignItems="center" justifyContent="space-between" mb={24}>
          <NumbersCard
            icon={<GraphIcon boxSize={20} />}
            title="$30B"
            text="Digital Currency Exchanged"
          />
          <NumbersCard
            icon={<ProfileIcon boxSize={20} />}
            title="10M+"
            text="Trusted Wallets Investor"
          />
          <NumbersCard
            icon={<GlobeIcon boxSize={20} />}
            title="195"
            text="Countries Supported"
          />
        </Flex>

        <Flex alignItems="center" justifyContent="space-between">
          <Box>
            <Image src={bgTwo} />
          </Box>

          <Box>
            <Flex direction="column" alignItems="start" justifyContent="center">
              <Heading mb={6}>
                Why you should choose <br /> CRYPTO
              </Heading>
              <Text color="#E0E0E0" mb={8}>
                Experience the next generation cryptocurrency <br /> platform.
                No financial borders, extra fees, and fake <br /> reviews.
              </Text>
              <Button
                bg="brand.accent"
                px={6}
                py={4}
                _hover={{
                  bg: '#fff',
                  color: 'brand.primary',
                }}
              >
                Learn More
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
