import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import styled from 'styled-components';

interface Props {
  onClick: () => void;
  icon: IconDefinition;
}

const Icon = ({ onClick, icon }: Props) => {
  return <StyledIcon size="lg" icon={icon} onClick={onClick} />;
};

const StyledIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
`;

export default Icon;
