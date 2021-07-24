import styled, { keyframes } from 'styled-components';

export const StyledSpinnerContainer = styled.div<{
  fontSize?: number | string;
}>`
  position: relative;
  font-size: ${props =>
    props.fontSize
      ? typeof props.fontSize === 'number'
        ? `${props.fontSize}px`
        : props.fontSize
      : '16px'};
`;

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    
    100% {
        transform: rotate(360deg);
    }
`;

export const StyledSpinner = styled.div<{
  fontSize?: number;
}>`
  color: transparent;
  margin: 0 auto;
  width: 1em;
  height: 1em;
  box-shadow: inset 0 0 0 1em;
  transform: translateZ(0);
  border-radius: 50%;
  :after,
  :before {
    border-radius: 50%;
    position: absolute;
    content: '';
  }
  :before {
    width: 0.5em;
    height: 1em;
    /* color to change */
    background: inherit;
    border-radius: 0 1em 1em 0;
    top: 0;
    left: 0.5em;
    transform-origin: 0 0.5em;
    animation: ${spin} 1s infinite ease;
  }
  :after {
    width: 0.5em;
    height: 1em;
    /* color to change */
    border: calc(0.1 * 1em) solid #1657cd;
    border-right-color: transparent;
    top: 0;
    left: 0;
    box-sizing: border-box;
    border-radius: 1em 0 0 1em;
    transform-origin: 0.5em 0.5em;
    animation: ${spin} 1s infinite ease;
  }
`;
