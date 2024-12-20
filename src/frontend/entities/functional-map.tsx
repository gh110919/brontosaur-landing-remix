import { styled } from "styled-components";
import { Image_ } from "./image";
import { TitleImageBox } from "./title-image-box";
import { data } from "src/frontend/api";

export const FunctionalMap = () => {
  return (
    <Container>
      <FunctionalList>
        {data.functional.map((e, i) => (
          <li key={i}>
            <FunctionalCard>
              <TitleImageBox>
                <CardTitle>{e.title}</CardTitle>
                <Image_ src={e.image} width={50} height={50}></Image_>
              </TitleImageBox>
              <CardText>{e.text}</CardText>
            </FunctionalCard>
          </li>
        ))}
      </FunctionalList>
    </Container>
  );
};

const Container = styled.section`
  ${(p) => (p.className = "Container")};
  display: flex;
`;

const FunctionalCard = styled.div`
  ${(p) => (p.className = "FunctionalCard")};
  width: calc(440 * var(--dv));
  height: calc(340 * var(--dv));
  padding: calc(34 * var(--dv));
  border-radius: calc(14 * var(--dv));

  background: var(--accent);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 48rem) {
    border-radius: calc(14 * var(--mv));
    width: calc(728 * var(--mv));
    height: calc(220 * var(--mv));
    padding: calc(34 * var(--mv));
  }
`;

const CardTitle = styled.strong`
  ${(p) => (p.className = "CardTitle")};
  width: calc(159 * var(--dv));
  height: fit-content;

  font-family: Raleway;
  font-size: calc(22 * var(--dv));
  font-weight: 600;
  line-height: calc(30.8 * var(--dv));
  text-align: left;

  color: var(--primary);
  transform: translate(0, calc(-6 * var(--dv)));

  @media (max-width: 48rem) {
    width: calc(363 * var(--mv));
    font-size: calc(22 * var(--mv));
    line-height: calc(30.8 * var(--mv));
  }
`;

const CardText = styled.p`
  ${(p) => (p.className = "CardText")};
  width: calc(372 * var(--dv));
  height: fit-content;

  font-family: Raleway;
  font-size: calc(18 * var(--dv));
  font-weight: 500;
  line-height: calc(24 * var(--dv));
  text-align: left;

  color: var(--secondary);

  @media (max-width: 48rem) {
    width: calc(583 * var(--mv));
    height: calc(72 * var(--mv));
    font-size: calc(18 * var(--mv));
    line-height: calc(24 * var(--mv));
  }
`;

const FunctionalList = styled.ul`
  ${(p) => (p.className = "FunctionalList")};
  display: flex;
  gap: calc(24 * var(--dv));

  @media (max-width: 48rem) {
    flex-direction: column;
    gap: calc(20 * var(--mv));
  }
`;
