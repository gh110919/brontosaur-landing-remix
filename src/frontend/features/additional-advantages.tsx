import { AdditionalAdvantagesMap } from "src/frontend/entities/additional-advantages-map";
import { Title } from "src/frontend/entities/title";

import { styled } from "styled-components";

export const AdditionalAdvantages = () => {
  return (
    <Container>
      <Title>Дополнительные преимущества</Title>
      <AdditionalAdvantagesMap></AdditionalAdvantagesMap>
    </Container>
  );
};

const Container = styled.section`
  ${(p) => (p.className = "Container")};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: calc(60 * var(--dv));
  @media (max-width: 48rem) {
    gap: calc(58 * var(--mv));
  }
`;
