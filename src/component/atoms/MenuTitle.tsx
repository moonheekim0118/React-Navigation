import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  title: string;
  path: string;
}

interface MenuProps {
  visiting: boolean;
}

const MenuTitle = ({ title, path }: Props) => {
  const location = useLocation();

  return (
    <Container to={path} visiting={location.pathname === path}>
      {title}
    </Container>
  );
};

const Container = styled(Link)`
  width: 100%;
  font-size: 1.5rem;
  text-align: center;
  padding: 30px 0;
  transition: background-color 0.5s ease;
  text-decoration: none;
  color: black;
  cursor: pointer;
  background-color: ${(props: MenuProps) =>
    props.visiting ? 'rgba(204, 255, 150, 0.3)' : '#fff'};

  &:hover {
    background-color: rgba(204, 255, 150, 0.3);
  }
`;

export default MenuTitle;
