import React from 'react';
import styled from 'styled-components';
import { faList } from '@fortawesome/free-solid-svg-icons';
import Span from '../atoms/span';
import Icon from '../atoms/Icon';

interface Props {
  title: string;
  onToggle: () => void;
  state: boolean;
}

interface StyleProp {
  state: boolean;
}

const Header = ({ title, onToggle, state }: Props) => {
  return (
    <Container state={state}>
      <Icon onClick={onToggle} icon={faList} />
      <Span size={1.5}>{title}</Span>
    </Container>
  );
};

const Container = styled.header`
    box-sizing border-box;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 50px;

    position:fixed;
    top:0;
    right:0;
    bottom:0;
    
    transition: width .5s ease;
    width:${(props: StyleProp) =>
      props.state ? 'calc(100% - 300px);' : '100%'};
    height:70px;
    
    border-bottom:1px solid black;
`;

export default Header;
