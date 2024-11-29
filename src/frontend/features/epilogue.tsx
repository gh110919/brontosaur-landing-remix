import { Image_ } from "src/frontend/entities/image";
import { data } from "src/frontend/api";
import { styled } from "styled-components";

export const Epilogue = () => {
  return (
    <Container>
      <TextBox>
        <Title>
          Brontosaur —
          <Span> это ваш шанс войти в новый, информационный век</Span>
        </Title>
        <Text>
          Присоединяйтесь к нам и&nbsp;ощутите, как просто и&nbsp;удобно станет
          управлять вашим заведением!
        </Text>
      </TextBox>
      <Picture>
        <Image_ src={data.links.epilogue} width={614} height={561}></Image_>
      </Picture>
    </Container>
  );
};

const Container = styled.section`
  ${(p) => (p.className = "Container")};
  display: flex;
  justify-content: space-between;
  width: calc(1368 * var(--dv));
  height: calc(470 * var(--dv));
  border-radius: calc(14 * var(--dv));
  padding: calc(40 * var(--dv));
  margin: calc(160 * var(--dv)) 0 0;
  background: var(--accent);
  position: relative;
  @media (max-width: 48rem) {
    width: calc(728 * var(--mv));
    height: calc(700 * var(--mv));
    border-radius: calc(14 * var(--mv));
    padding: calc(40 * var(--mv)) calc(30 * var(--mv));
    overflow: hidden;
    margin: calc(125 * var(--mv)) 0 0;
  }
`;

const Title = styled.strong`
  ${(p) => (p.className = "Title")};
  width: calc(575 * var(--dv));
  height: fit-content;

  font-family: Raleway;
  font-size: calc(46 * var(--dv));
  font-weight: 600;
  line-height: calc(54 * var(--dv));
  text-align: left;
  color: var(--main);

  @media (max-width: 48rem) {
    width: calc(575 * var(--mv));
    font-size: calc(46 * var(--mv));
    line-height: calc(54 * var(--mv));
  }
`;

const Span = styled.span`
  ${(p) => (p.className = "Span")};
  color: var(--primary);
`;

const Text = styled.p`
  ${(p) => (p.className = "Text")};
  width: calc(404 * var(--dv));
  height: calc(87 * var(--dv));

  font-family: Raleway;
  font-size: calc(22 * var(--dv));
  font-weight: 500;
  line-height: calc(28.6 * var(--dv));
  text-align: left;
  color: var(--secondary);

  @media (max-width: 48rem) {
    width: calc(337 * var(--mv));
    height: calc(116 * var(--mv));
    font-size: calc(22 * var(--mv));
    line-height: calc(28.6 * var(--mv));
  }
`;

const TextBox = styled.div`
  ${(p) => (p.className = "TextBox")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 48rem) {
    justify-content: start;
    gap: calc(30 * var(--mv));
  }
`;

const Picture = styled.div`
  ${(p) => (p.className = "Picture")};
  position: absolute;
  bottom: 0;
  right: 0;
  @media (max-width: 48rem) {
    bottom: calc(-70 * var(--mv));
    right: calc(-105 * var(--mv));
  }
`;
