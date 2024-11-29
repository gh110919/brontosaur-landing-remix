import { styled } from "styled-components";
import { Image_ } from "./image";
import { data } from "src/frontend/api";

export const ConnectionMap = () => {
  return (
    <Container>
      <ConnectionList>
        {data.connection.map((e, i, a) => {
          const last = i === a.length - 1;

          return (
            <li key={i}>
              <Card $last={last}>
                <TextBox>
                  <CardTitle $last={last}>{e.title}</CardTitle>
                  <CardText $last={last}>{e.text}</CardText>
                </TextBox>
                <PriceBox>
                  <PriceTitle $last={last}>Cтоимость подключения</PriceTitle>
                  <Price $last={last}>{e.price}</Price>
                </PriceBox>
                <Picture>
                  <Image_ src={e.image!} width={572} height={468}></Image_>
                </Picture>
              </Card>
            </li>
          );
        })}
      </ConnectionList>
    </Container>
  );
};

const Container = styled.section`
  ${(p) => (p.className = "Container")};
  display: flex;
`;

const ConnectionList = styled.ul`
  ${(p) => (p.className = "ConnectionList")};
  display: flex;
  justify-content: center;
  gap: calc(24 * var(--dv));

  @media (max-width: 48rem) {
    flex-direction: column;
    width: calc(768 * var(--mv));
    align-items: center;
    gap: calc(20 * var(--mv));
  }
`;

const Card = styled.div<{ $last: boolean }>`
  width: calc(440 * var(--dv));
  height: calc(400 * var(--dv));
  border-radius: calc(14 * var(--dv));

  background: ${(p) => (p.$last ? "var(--main)" : "#ffffff")};

  padding: calc(30 * var(--dv));
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;

  @media (max-width: 48rem) {
    width: calc(728 * var(--mv));
    height: calc(260 * var(--mv));
    padding: calc(30 * var(--mv));
  }
`;

const TextBox = styled.div`
  ${(p) => (p.className = "TextBox")};
  display: flex;
  flex-direction: column;
  gap: calc(30 * var(--dv));

  @media (max-width: 48rem) {
    gap: calc(20 * var(--mv));
  }
`;

const PriceBox = styled.div`
  ${(p) => (p.className = "PriceBox")};
  display: flex;
  flex-direction: column;
  gap: calc(14 * var(--dv));
`;

type TLast = { $last: boolean };

const CardTitle = styled.strong<TLast>`
  width: calc(368 * var(--dv));
  height: fit-content;
  font-family: Raleway;
  font-size: calc(22 * var(--dv));
  font-weight: 600;
  line-height: calc(28.6 * var(--dv));
  text-align: left;

  color: ${(p) => (p.$last ? "#ffffff" : "var(--primary)")};
  @media (max-width: 48rem) {
    width: calc(493 * var(--mv));
    font-size: calc(22 * var(--mv));
    line-height: calc(28.6 * var(--mv));
  }
`;

const CardText = styled.p<TLast>`
  width: calc(308 * var(--dv));
  height: fit-content;

  font-family: Raleway;
  font-size: calc(18 * var(--dv));
  font-weight: 500;
  line-height: calc(24 * var(--dv));
  text-align: left;

  color: ${(p) => (p.$last ? "#ffffff" : "var(--secondary)")};
  opacity: ${(p) => (p.$last ? "70%" : "100%")};

  @media (max-width: 48rem) {
    width: calc(397 * var(--mv));
    height: fit-content;
    font-size: calc(18 * var(--mv));
    line-height: calc(24 * var(--mv));
  }
`;

const PriceTitle = styled.strong<TLast>`
  width: calc(323 * var(--dv));
  height: fit-content;

  font-family: Raleway;
  font-size: calc(14 * var(--dv));
  font-weight: 500;
  line-height: calc(18 * var(--dv));
  text-align: left;

  color: ${(p) => (p.$last ? "#ffffff" : "var(--secondary)")};
  opacity: ${(p) => (p.$last ? "70%" : "100%")};

  @media (max-width: 48rem) {
    width: calc(323 * var(--mv));
    font-size: calc(14 * var(--mv));
    line-height: calc(18 * var(--mv));
    transform: translate(0, calc(-10 * var(--mv)));
  }
`;

const Price = styled.p<TLast>`
  width: calc(323 * var(--dv));
  height: calc(29 * var(--dv));

  font-family: Raleway;
  font-size: calc(22 * var(--dv));
  font-weight: 600;
  line-height: calc(28.6 * var(--dv));
  text-align: left;

  color: ${(p) => (p.$last ? "#ffffff" : "var(--primary)")};

  @media (max-width: 48rem) {
    width: calc(323 * var(--mv));
    height: calc(29 * var(--mv));
    font-size: calc(22 * var(--mv));
    line-height: calc(28.6 * var(--mv));
  }
`;

const Picture = styled.div`
  ${(p) => (p.className = "Picture")};
  position: absolute;
  bottom: calc(-140 * var(--dv));
  right: calc(-278 * var(--dv));
  @media (max-width: 48rem) {
    bottom: calc(-137 * var(--mv));
    right: calc(-253 * var(--mv));
  }
`;
