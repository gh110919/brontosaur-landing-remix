import { WhatCards } from "src/frontend/entities/what-cards";
import { data } from "src/frontend/api";
import { styled } from "styled-components";

type TProps = Partial<{
  children: JSX.Element;
}>;

export const Booking = (_props?: TProps) => {
  return (
    <Container>
      <WhatCards
        title="Страница создания&nbsp;бронирования"
        image={data.links.booking}
        slice="booking"
        data={data.booking}
      ></WhatCards>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  @media (max-width: 48rem) {
    margin-top: calc(-8 * var(--mv));
  }
`;
