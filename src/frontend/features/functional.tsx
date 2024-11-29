import { FunctionalMap } from "src/frontend/entities/functional-map";
import { styled } from "styled-components";

export const Functional = () => {
  return (
    <Container>
      <Title>Основной функционал бронирования</Title>
      <FunctionalMap></FunctionalMap>
    </Container>
  );
};

const Container = styled.section`
  ${(p) => (p.className = "Container")};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: calc(60 * var(--dv));
  padding: 0 calc(36 * var(--dv)) 0;
  @media (max-width: 48rem) {
    gap: calc(60 * var(--mv));
  }
`;

const Title = styled.strong`
  ${(p) => (p.className = "Title")};
  width: calc(509 * var(--dv));
  height: fit-content;

  font-family: Raleway;
  font-size: calc(46 * var(--dv));
  font-weight: 600;
  line-height: calc(54 * var(--dv));
  text-align: center;

  color: var(--primary);

  @media (max-width: 48rem) {
    width: calc(509 * var(--mv));
    font-size: calc(46 * var(--mv));
    line-height: calc(54 * var(--mv));
  }
`;
