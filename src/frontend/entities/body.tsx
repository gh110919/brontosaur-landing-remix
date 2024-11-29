import { styled } from "styled-components";

export const Body = styled.body`
  ${(p) => (p.className = "Body")};
  width: calc(1440 * var(--dv));
  margin: auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 48rem) {
    width: calc(768 * var(--mv));
  }
`;
