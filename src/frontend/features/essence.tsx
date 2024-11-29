import { data } from "src/frontend/api";
import { styled } from "styled-components";
import { WhatCards } from "../entities/what-cards";

export const Essence = () => {
  return (
    <Container>
      <WhatCards
        title="Что вы увидите на&nbsp;главной&nbsp;странице"
        data={data.essence}
        image={data.links.essense}
        slice="essense"
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
  padding: 0 0 0;

  @media (max-width: 48rem) {
    width: calc(728 * var(--mv));
    gap: calc(60 * var(--mv));
  }
`;
