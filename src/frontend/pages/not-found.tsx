import { Provider } from "react-redux";
import { rootStore } from "SHARED/global-state";
import { Header } from "src/frontend/widgets/header";
import { styled } from "styled-components";

export const NotFound = () => {
  return (
    <Provider store={rootStore}>
      <Header></Header>
      <Main>
        <Title>К сожалению, этой страницы нет в нашем меню</Title>
        <Link href="/">Вернуться на главную</Link>
      </Main>
    </Provider>
  );
};

const Main = styled.main`
  ${(p) => (p.className = "Main")};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: calc(34 * var(--dv));
`;

const Title = styled.h1`
  ${(p) => (p.className = "Title")};
  width: calc(722 * var(--dv));
  height: fit-content;

  font-family: Raleway;
  font-size: calc(46 * var(--dv));
  font-weight: 600;
  line-height: calc(54 * var(--dv));
  text-align: center;

  @media (max-width: 48rem) {
    width: calc(415 * var(--mv));
    height: calc(162 * var(--mv));
    font-size: calc(46 * var(--mv));
    line-height: calc(54 * var(--mv));
  }
`;

const Link = styled.a`
  ${(p) => (p.className = "Link")};
  width: calc(255 * var(--dv));
  height: calc(50 * var(--dv));
  padding: calc(10 * var(--dv)) calc(16 * var(--dv));
  border-radius: calc(10 * var(--dv));

  font-family: Raleway;
  font-size: calc(14 * var(--dv));
  font-weight: 500;
  line-height: calc(18 * var(--dv));
  text-align: left;

  background: var(--main);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: var(--accent);
    background: var(--primary);
  }

  @media (max-width: 48rem) {
    width: calc(255 * var(--mv));
    height: calc(60 * var(--mv));
    padding: calc(14 * var(--mv)) calc(16 * var(--mv));
    border-radius: calc(10 * var(--mv));
    font-size: calc(14 * var(--mv));
    line-height: calc(18 * var(--mv));
  }
`;
