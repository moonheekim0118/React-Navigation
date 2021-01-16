import React from 'react';
import styled from 'styled-components';

interface Props {
  size?: number;
  color?: string;
  children: string;
}

const Span = ({ size = 1, color = 'black', children }: Props) => {
  return (
    <Container size={size} color={color}>
      {children}
    </Container>
  );
};

const Container = styled.span`
  font-size: ${(props: Props) => `${props.size}rem`};
  color: ${(props: Props) => props.color};
`;

export default Span;
