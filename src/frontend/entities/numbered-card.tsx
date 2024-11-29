import { styled } from "styled-components";
import { NumberedButton } from "./numbered-button";

type TProps = Partial<{
  title: string;
  text: string;
  name: string;
  visible: boolean;
  reverse: boolean;
}>;

export const NumberedCard = (_props?: TProps) => {
  return (
    <Container>
      <ButtonCard $visible={_props?.visible!} $reverse={_props?.reverse!}>
        <CardTitle>{_props?.title}</CardTitle>
        <CardText>{_props?.text}</CardText>
        <ButtonBox $reverse={_props?.reverse!}>
          <NumberedButton $backColor="#FFFFFF" $textColor="var(--main)">
            {_props?.name}
          </NumberedButton>
        </ButtonBox>
      </ButtonCard>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
`;

const ButtonCard = styled.div<{ $visible: boolean; $reverse: boolean }>`
  display: ${(p) => (p.$visible ? "flex" : "none")};
  width: calc(315 * var(--dv));
  padding: calc(30 * var(--dv));
  border-radius: calc(14 * var(--dv));
  background: var(--accent);
  color: black;
  flex-direction: column;
  gap: calc(20 * var(--dv));
  position: absolute;
  z-index: 10;
  bottom: calc(-30 * var(--dv));
  right: ${(p) => (!p.$reverse ? "calc(-30 * var(--dv))" : "auto")};
  left: ${(p) => (p.$reverse ? "calc(-30 * var(--dv))" : "auto")};
  @media (max-width: 48rem) {
    right: ${(p) => (p.$reverse ? "calc(-30 * var(--mv))" : "auto")};
    left: ${(p) => (!p.$reverse ? "calc(-30 * var(--mv))" : "auto")};
    width: calc(357 * var(--mv));
    height: fit-content;
    padding: calc(30 * var(--mv));
    border-radius: calc(14 * var(--mv));
    gap: calc(20 * var(--mv));
    padding: calc(30 * var(--mv));
  }
`;

const ButtonBox = styled.div<{ $reverse: boolean }>`
  display: flex;
  justify-content: ${(p) => (p.$reverse ? "start" : "end")};

  @media (max-width: 48rem) {
    justify-content: ${(p) => (p.$reverse ? "end" : "start")};
  }
`;

const CardTitle = styled.strong`
  ${(p) => (p.className = "CardTitle")};
  width: calc(255 * var(--dv));
  height: fit-content;

  font-family: Raleway;
  font-size: calc(18 * var(--dv));
  font-weight: 600;
  line-height: calc(24 * var(--dv));
  text-align: left;

  color: var(--primary);

  @media (max-width: 48rem) {
    width: calc(297 * var(--mv));
    font-size: calc(18 * var(--mv));
    line-height: calc(24 * var(--mv));
  }
`;

const CardText = styled.p`
  ${(p) => (p.className = "CardText")};
  width: calc(255 * var(--dv));
  height: fit-content;
  font-family: Raleway;
  font-size: calc(14 * var(--dv));
  font-weight: 500;
  line-height: calc(18 * var(--dv));
  text-align: left;

  color: var(--secondary);

  @media (max-width: 48rem) {
    width: calc(286 * var(--mv));
    font-size: calc(14 * var(--mv));
    line-height: calc(18 * var(--mv));
  }
`;
