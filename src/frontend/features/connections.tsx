import { ConnectionMap } from "src/frontend/entities/connections-map";
import { Title } from "src/frontend/entities/title";
import { styled } from "styled-components";

export const Connections = () => {
  return (
    <Container>
      <Title style={{ transform: `translate(calc(-5 * var(--dv)),0)` }}>
        Варианты подключения
      </Title>
      <ConnectionMap></ConnectionMap>
      <Caption>Абонентская плата – всего 1500 руб/мес</Caption>
    </Container>
  );
};

const Container = styled.section`
  ${(p) => (p.className = "Container")};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: calc(60 * var(--dv));
  background: var(--accent);
  padding: calc(100 * var(--dv)) calc(36 * var(--dv));
  border-radius: calc(40 * var(--dv));
  @media (max-width: 48rem) {
    gap: calc(60 * var(--mv));
    padding: calc(120 * var(--mv)) 0 calc(135 * var(--mv));
    border-radius: calc(40 * var(--mv));
  }
`;

const Caption = styled.p`
  ${(p) => (p.className = "Caption")};
  width: 100%;
  height: calc(29 * var(--dv));

  font-family: Raleway;
  font-size: calc(22 * var(--dv));
  font-weight: 600;
  line-height: calc(28.6 * var(--dv));
  text-align: left;

  @media (max-width: 48rem) {
    width: calc(728 * var(--mv));
    font-size: calc(22 * var(--mv));
    line-height: calc(28.6 * var(--mv));
    transform: translate(calc(14 * var(--mv)), 0);
  }
`;
