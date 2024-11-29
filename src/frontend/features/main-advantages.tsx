import { MainAdvantagesMap } from "src/frontend/entities/main-advantages-map";
import { Title } from "src/frontend/entities/title";
import { styled } from "styled-components";

export const MainAdvantages = () => {
  return (
    <Container>
      <Title>
        Основные <br /> преимущества для вас
      </Title>
      <MainAdvantagesMap></MainAdvantagesMap>
    </Container>
  );
};

const Container = styled.section`
  ${(p) => (p.className = "Container")};
  display: flex;
  flex-direction: column;
  gap: calc(60 * var(--dv));
  align-items: center;
  @media (max-width: 48rem) {
    transform: translate(0, calc(-8 * var(--mv)));
    gap: calc(60 * var(--mv));
  }
`;
