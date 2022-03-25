import React from 'react';
import { Heading, Text, BoxProps, Stack } from '@chakra-ui/react';

interface CounterCardProps extends BoxProps {
  icon: React.ReactElement;
  text?: string | undefined;
}

export const NumbersCard = (props: CounterCardProps) => {
  return (
    <Stack direction="row" spacing={6}>
      {props.icon}
      <Stack>
        <Heading>{props.title}</Heading>
        <Text color="#E0E0E0">{props.text}</Text>
      </Stack>
    </Stack>
  );
};
