import React from 'react'
import styled, { keyframes } from 'styled-components'

const createAnimation = (replay, position_y, position_x, opacity, scale, blur) => {
  return keyframes`
    from {
      top: 0;
      left: 0;
      filter: blur(0);
      opacity: 1;
      transform: scale(1);
    }
    ${
      replay
        ? `50% {
     top: ${position_y}px;
      left: ${position_x}px;
      filter: blur(${blur}px);
      opacity: ${opacity};
      transform: scale(${scale});
    }`
        : null
    }
    to ${
      replay
        ? `{
      top: 0;
      left: 0;
      filter: blur(0);
      opacity: 1;
      transform: scale(1);
    }`
        : `{
      top: ${position_y}px;
      left: ${position_x}px;
      filter: blur(${blur}px);
      opacity: ${opacity};
      transform: scale(${scale});
    }`
    }
  `
}
const AnimatedDiv = styled.div`
  position: relative;
  animation: ${(props) =>
      createAnimation(
        props.replay,
        props.position_y,
        props.position_x,
        props.opacity,
        props.scale,
        props.blur
      )}
    ${(props) => props.easing?.value || 'linear'} ${(props) => (!!props.replay ? 'infinite' : null)};
  animation-delay: ${(props) => props.delay || 0}s;
  animation-duration: ${(props) => props.speed || 0}s;
`

export default AnimatedDiv
