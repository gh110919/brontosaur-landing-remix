import { styled } from "styled-components";
import { Image_ } from "./image";
import { data } from "src/frontend/api";

type TProps = Partial<{
  children: JSX.Element;
}>;

export const Webonizer = (_props?: TProps) => {
  return (
    <Container href="https://webonizer.su" target="_blank">
      <Dev>Дизайн и разработка сайта</Dev>
      <Image_ src={data.links.webonizer} width={112} height={22.18}></Image_>
    </Container>
  );
};

const Dev = styled.p`
  ${(p) => (p.className = "Design")};
  display: flex;
  width: calc(184 * var(--dv));
  height: calc(20 * var(--dv));
  font-family: Raleway;
  font-size: calc(14 * var(--dv));
  font-weight: 400;
  line-height: calc(19.6 * var(--dv));
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: whitesmoke;
  @media (max-width: 48rem) {
    width: calc(184 * var(--mv));
    height: calc(20 * var(--mv));
    font-size: calc(14 * var(--mv));
    line-height: calc(19.6 * var(--mv));
  }
`;

const Container = styled.a`
  display: flex;
  align-items: center;
  gap: calc(10 * var(--dv));
  @media (max-width: 48rem) {
    gap: calc(10 * var(--mv));
  }
`;
