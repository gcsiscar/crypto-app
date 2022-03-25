import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Spacer,
  VStack,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  HStack,
} from '@chakra-ui/react';
import { Brand } from '../common/components';
import { RiSearchLine } from 'react-icons/ri';
import { BitcoinIcon } from '../assets/icons/BitcoinIcon';

export const Dashboard = () => {
  return (
    <Box>
      <Flex justifyContent="space-between">
        <Flex
          height="100vh"
          direction="column"
          color="white"
          bg="brand.primary"
          p={4}
        >
          <Brand />
          <VStack>
            <Box>Dashboard</Box>
            <Box>Profile</Box>
            <Box>Reports</Box>
            <Box>Wallet</Box>
          </VStack>
          <Spacer />
          <Box>Settings</Box>
        </Flex>
        <Box flexBasis="100%" color="#fff" bg="brand.primary">
          <Flex alignItems="center" justifyContent="space-between">
            <Box>
              <Heading lineHeight="1.2">Dashboard</Heading>
              <Text>Date Today</Text>
            </Box>
            <InputGroup width="50%">
              <InputLeftElement
                pointerEvents="none"
                children={<RiSearchLine />}
              />
              <Input
                type="search"
                placeholder="Search Crytocurrency, news, etc"
              />
            </InputGroup>
          </Flex>

          <Flex>
            <Box bg="#35068c" p={8} borderRadius="1rem">
              <Flex alignItems="center">
                <BitcoinIcon boxSize={12} mr={2} />
                <VStack alignItems="start">
                  <HStack alignItems="center" spacing={2}>
                    <Heading lineHeight="1" size="sm">
                      Bitcoin
                    </Heading>
                    <Text color="#8D8D8D" fontWeight="medium">
                      BTC
                    </Text>
                  </HStack>
                  <Text lineHeight="1">0.000080 BTC</Text>
                </VStack>
                <Spacer />
                <Text>+125%</Text>
              </Flex>
            </Box>
          </Flex>
        </Box>

        <Box>Status?</Box>
      </Flex>
    </Box>
  );
};
