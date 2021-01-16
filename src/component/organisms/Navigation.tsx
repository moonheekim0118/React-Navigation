import React from 'react';
import styled from 'styled-components';
import MenuTitle from '../atoms/MenuTitle';

interface Props {
  state: boolean;
}

const Navigation = ({ state }: Props) => {
  return (
    <Container state={state}>
      <MenuTitle path="/" title="Home" />
      <MenuTitle path="/about" title="About" />
    </Container>
  );
};

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background-color: #fff;
  border-right: 1px solid black;

  transition: transform 0.5s ease;
  transform: ${(props: Props) =>
    props.state ? 'translateX(0)' : 'translateX(-100%)'};
`;

export default Navigation;
