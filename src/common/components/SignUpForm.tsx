import React from 'react';
import { FormControl } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Button, VStack } from '@chakra-ui/react';

export const SignUpForm = () => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log('Submitted');
  };
  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing="2rem">
        <FormControl id="email">
          <Input
            type="email"
            variant="flushed"
            placeholder="Email"
            borderColor="brand.primary"
          />
        </FormControl>
        <FormControl id="password">
          <Input
            type="password"
            placeholder="Password"
            variant="flushed"
            borderColor="brand.primary"
          />
        </FormControl>
        <Button type="submit" width="100%">
          Sign up
        </Button>
      </VStack>
    </form>
  );
};
