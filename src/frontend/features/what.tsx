import { data } from "src/frontend/api";
import { styled } from "styled-components";
import { WhatCards } from "../entities/what-cards";

export const What = () => {
  return (
    <Container>
      <WhatCards
        slice="what"
        title="Что вы увидите на&nbsp;главной&nbsp;странице"
        data={data.what}
        image={data.links.what}
      ></WhatCards>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  @media (max-width: 48rem) {
    transform: translate(0, calc(-8 * var(--mv)));
  }
`;
