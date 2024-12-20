import { styled } from "styled-components";
import { Image_ } from "./image";
import { TitleImageBox } from "./title-image-box";
import { data } from "src/frontend/api";

export const AdditionalAdvantagesMap = () => {
  return (
    <Container>
      <AdditionalList>
        {data.additional_advantages.map((e, i) => {
          return (
            <li key={i}>
              <Card>
                <TitleImageBox>
                  <CardTitle>{e.title}</CardTitle>
                  <Image_ src={e.image} width={50} height={50}></Image_>
                </TitleImageBox>
                <CardText>{e.text}</CardText>
              </Card>
            </li>
          );
        })}
      </AdditionalList>
    </Container>
  );
};

const Container = styled.section`
  ${(p) => (p.className = "Container")};
  display: flex;
`;

const AdditionalList = styled.ul`
  ${(p) => (p.className = "AdditionalList")};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: calc(24 * var(--dv));

  @media (max-width: 48rem) {
    grid-template-columns: repeat(1, 1fr);
    gap: calc(20 * var(--mv));
  }
`;

const Card = styled.div`
  ${(p) => (p.className = "Card")};
  width: calc(672 * var(--dv));
  height: calc(200 * var(--dv));
  padding: calc(30 * var(--dv));
  border-radius: calc(14 * var(--dv));

  background: var(--accent);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 48rem) {
    border-radius: calc(14 * var(--mv));
    width: calc(728 * var(--mv));
    height: calc(200 * var(--mv));
    padding: calc(30 * var(--mv));
  }
`;

const CardTitle = styled.strong`
  ${(p) => (p.className = "CardTitle")};
  width: calc(365 * var(--dv));
  height: fit-content;

  font-family: Raleway;
  font-size: calc(22 * var(--dv));
  font-weight: 600;
  line-height: calc(28.6 * var(--dv));
  text-align: left;
  transform: translate(0, calc(-5 * var(--dv)));

  @media (max-width: 48rem) {
    width: calc(448 * var(--mv));
    height: calc(45 * var(--mv));
    font-size: calc(22 * var(--mv));
    line-height: calc(28.6 * var(--mv));
  }
`;

const CardText = styled.p`
  ${(p) => (p.className = "CardText")};
  width: calc(577 * var(--dv));
  height: fit-content;

  font-family: Raleway;
  font-size: calc(18 * var(--dv));
  font-weight: 500;
  line-height: calc(24 * var(--dv));
  text-align: left;

  color: var(--secondary);

  @media (max-width: 48rem) {
    width: calc(578 * var(--mv));
    height: fit-content;
    font-size: calc(18 * var(--mv));
    line-height: calc(24 * var(--mv));
  }
`;
