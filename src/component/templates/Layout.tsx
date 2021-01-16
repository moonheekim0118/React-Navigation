import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Navigation from '../organisms/Navigation';
import Header from '../organisms/Header';

interface Props {
  pageTitle: string;
}

const Layout = ({ pageTitle }: Props) => {
  const [showNav, setShowNav] = useState<boolean>(false);

  const onToggle = useCallback(() => {
    setShowNav(!showNav);
  }, [showNav]);

  return (
    <Container>
      <Header title={pageTitle} onToggle={onToggle} state={showNav} />
      <Navigation state={showNav} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default Layout;
