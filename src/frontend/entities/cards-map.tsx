import { styled } from "styled-components";
import { Image_ } from "./image";
import { TitleImageBox } from "./title-image-box";

type TProps = {
  cards: {
    name: string;
    image: string;
    text: string;
  }[];
};

export const CardsMap = (_props?: TProps) => {
  return (
    <Container>
      <List>
        {_props?.cards!.map((e, i) => (
          <li key={i}>
            <Card>
              <TitleImageBox>
                <CardTitle>{e.name}</CardTitle>
                <Image_ src={e.image} width={50} height={50}></Image_>
              </TitleImageBox>
              <CardText>{e.text}</CardText>
            </Card>
          </li>
        ))}
      </List>
    </Container>
  );
};

const Container = styled.section`
  ${(p) => (p.className = "Container")};
  display: flex;
`;

const List = styled.ul`
  ${(p) => (p.className = "List")};
  display: grid;
  gap: calc(24 * var(--dv));
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 48rem) {
    grid-template-columns: repeat(1, 1fr);
    gap: calc(20 * var(--mv));
  }
`;

const Card = styled.div`
  ${(p) => (p.className = "Card")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: calc(440 * var(--dv));
  min-height: calc(260 * var(--dv));
  padding: calc(30 * var(--dv));
  border-radius: calc(14 * var(--dv));
  background: white;

  @media (max-width: 48rem) {
    border-radius: calc(14 * var(--mv));
    width: calc(728 * var(--mv));
    min-height: calc(200 * var(--mv));
    padding: calc(30 * var(--mv));
  }
`;

const CardTitle = styled.strong`
  ${(p) => (p.className = "CardTitle")};
  width: calc(206 * var(--dv));
  height: fit-content;

  font-family: Raleway;
  font-size: calc(22 * var(--dv));
  font-weight: 600;
  line-height: calc(28.6 * var(--dv));
  text-align: left;
  transform: translate(0, calc(-5 * var(--dv)));
  @media (max-width: 48rem) {
    width: calc(521 * var(--mv));
    font-size: calc(22 * var(--mv));
    line-height: calc(28.6 * var(--mv));
    transform: translate(calc(-1 * var(--mv)), calc(-5 * var(--mv)));
  }
`;

const CardText = styled.p`
  ${(p) => (p.className = "CardText")};
  width: calc(380 * var(--dv));
  height: fit-content;

  font-family: Raleway;
  font-size: calc(18 * var(--dv));
  font-weight: 500;
  line-height: calc(24 * var(--dv));
  text-align: left;

  color: var(--secondary);

  @media (max-width: 48rem) {
    width: calc(400 * var(--mv));
    height: fit-content;
    font-size: calc(18 * var(--mv));
    line-height: calc(24 * var(--mv));
  }
`;
