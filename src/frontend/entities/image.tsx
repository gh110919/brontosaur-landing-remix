import { styled } from "styled-components";

type TImage_Props = { src: string; width: number; height: number };

export const Image_ = styled.div<TImage_Props>`
  position: relative;
  width: calc(${(p) => p.width} * var(--dv));
  height: calc(${(p) => p.height} * var(--dv));
  &::before {
    content: "";
    width: calc(${(p) => p.width} * var(--dv));
    height: calc(${(p) => p.height} * var(--dv));
    position: absolute;
    background-image: url(${(p) => p.src});
    background-size: calc(${(p) => p.width} * var(--dv))
      calc(${(p) => p.height} * var(--dv));
  }

  @media (max-width: 48rem) {
    width: calc(${(p) => p.width} * var(--mv));
    height: calc(${(p) => p.height} * var(--mv));
    &::before {
      width: calc(${(p) => p.width} * var(--mv));
      height: calc(${(p) => p.height} * var(--mv));
      background-size: calc(${(p) => p.width} * var(--mv))
        calc(${(p) => p.height} * var(--mv));
    }
  }
`;
