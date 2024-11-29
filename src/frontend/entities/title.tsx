import { styled } from "styled-components";

export const Title = styled.strong`
  ${(p) => (p.className = "Title")};
  width: calc(600 * var(--dv));
  height: fit-content;

  font-family: Raleway;
  font-size: calc(46 * var(--dv));
  font-weight: 600;
  line-height: calc(54 * var(--dv));
  text-align: center;

  color: var(--primary);

  @media (max-width: 48rem) {
    width: calc(728 * var(--mv));
    font-size: calc(46 * var(--mv));
    line-height: calc(54 * var(--mv));
  }
`;
