import { styled } from "styled-components";

export const Owners = () => {
  return (
    <Container>
      <Title>
        Владельцам <br /> и администраторам заведений
      </Title>
      <Text>
        <Span>Brontosaur — это революционное решение </Span>
        для&nbsp;управления вашим заведением. Мы предлагаем простое и удобное
        <Span> управление резервами и&nbsp;заказами, </Span>
        чтобы вы&nbsp;могли сосредоточиться на&nbsp;
        <Span>улучшении&nbsp;обслуживания </Span>
        ваших&nbsp;гостей
      </Text>
    </Container>
  );
};

const Container = styled.section`
  ${(p) => (p.className = "Container")};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: calc(60 * var(--dv));
  transform: translate(0, calc(19 * var(--dv)));
  padding: calc(60 * var(--dv)) 0 calc(240 * var(--dv));

  @media (max-width: 48rem) {
    padding: calc(0 * var(--mv)) 0 calc(70 * var(--mv));
    transform: translate(0, 0);
    gap: calc(70 * var(--mv));
  }
`;

const Title = styled.strong`
  ${(p) => (p.className = "Title")};
  width: calc(362 * var(--dv));
  height: fit-content;

  font-family: Raleway;
  font-size: calc(24 * var(--dv));
  font-weight: 500;
  line-height: calc(32 * var(--dv));
  text-align: center;

  color: var(--primary);

  @media (max-width: 48rem) {
    width: calc(362 * var(--mv));
    font-size: calc(24 * var(--mv));
    line-height: calc(32 * var(--mv));
  }
`;

const Text = styled.p`
  ${(p) => (p.className = "Text")};
  width: calc(1234 * var(--dv));
  height: calc(300 * var(--dv));

  font-family: Raleway;
  font-size: calc(46 * var(--dv));
  font-weight: 600;
  line-height: calc(59.8 * var(--dv));
  text-align: center;

  color: var(--primary);
  transform: translate(0, calc(19 * var(--dv)));

  @media (max-width: 48rem) {
    width: calc(728 * var(--mv));
    height: calc(440 * var(--mv));
    font-size: calc(42 * var(--mv));
    line-height: calc(54.6 * var(--mv));
  }
`;

const Span = styled.span`
  ${(p) => (p.className = "Span")};
  color: var(--main);
`;
