import { WhatCards } from "src/frontend/entities/what-cards";
import { data } from "src/frontend/api";
import { styled } from "styled-components";

type TProps = Partial<{
  children: JSX.Element;
}>;

export const Menu = (_props?: TProps) => {
  return (
    <Container>
      <WhatCards
        title="Страница редактирования&nbsp;меню"
        image={data.links.menu}
        slice="menu"
        data={data.menu}
      ></WhatCards>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
`;
