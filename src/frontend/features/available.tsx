import { data } from "src/frontend/api";
import { styled } from "styled-components";
import { WhatCards } from "../entities/what-cards";

export const Available = () => {
  return (
    <Container>
      <WhatCards
        title="Что вам доступно на&nbsp;странице&nbsp;заведения"
        data={data.available}
        image={data.links.available}
        slice="available"
      ></WhatCards>
    </Container>
  );
};

const Container = styled.section`
  ${(p) => (p.className = "Container")};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: calc(60 * var(--dv));
  margin: auto;
  @media (max-width: 48rem) {
    gap: calc(50 * var(--mv));
  }
`;
