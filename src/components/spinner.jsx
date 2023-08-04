import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for spinner animation
const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
  display: inline-block;
  width: ${(props) => props.size || '32px'};
  height: ${(props) => props.size || '32px'};
  border: 4px solid #c4c4c4;
  border-left-color: rgb(20, 137, 232);
  border-radius: 50%;
  animation: ${spinAnimation} 1s linear infinite;
`;

// eslint-disable-next-line react/prop-types
function Spinner({ size }) {
    return <SpinnerContainer size={size} />
}

export default Spinner;