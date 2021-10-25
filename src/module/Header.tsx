import React from 'react';
import { Box, Container, Grid, HStack, Heading, Link } from '@chakra-ui/layout';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { SignUpForm } from '../common/components/SignUpForm';
import { CryptoLogo } from '../assets/icons/CryptoLogo';

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box as="header" bg="brand.primary" color="white" py="2rem">
      <Container maxW="container.xl">
        <Grid templateColumns="auto 1fr auto" gap="3rem" placeItems="center">
          <HStack spacing="1rem">
            <CryptoLogo boxSize={8} />
            <Heading fontSize="lg" textTransform="uppercase">
              Crypto
            </Heading>
          </HStack>
          <Box display={['none', 'none', 'none', 'block']} justifySelf="end">
            <HStack spacing="2rem">
              <Link>Products</Link>
              <Link>Features</Link>
              <Link>About</Link>
              <Link>Contact</Link>
            </HStack>
          </Box>
          <HStack spacing="1.5rem">
            <Box fontWeight="500" fontSize="md">
              Login
            </Box>
            <Box border="1px solid #f2f2f2" height="2rem" opacity="0.3"></Box>
            <Button onClick={onOpen} padding="1em 2em">
              Register
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent borderRadius="1rem" p="1em">
                <ModalHeader color="brand.primary">Sign Up</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <SignUpForm />
                </ModalBody>

                <ModalFooter>
                  {/* <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant="ghost">Secondary Action</Button> */}
                </ModalFooter>
              </ModalContent>
            </Modal>
          </HStack>
        </Grid>
      </Container>
    </Box>
  );
};
