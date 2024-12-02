import { Image_ } from "src/frontend/entities/image";
import { data } from "src/frontend/api";
import { useExpectedWidth } from "src/frontend/shared/expected-width";
import { useDispatch_, useSelector_ } from "src/frontend/shared/global-state";
import { linksSlice } from "src/frontend/shared/global-state/slices/links";

import { styled } from "styled-components";

export const Prologue = () => {
  const dispatch = useDispatch_();

  const { prologue } = useSelector_((s) => s.linksSlice);

  const handleServicePrologue = () => {
    dispatch(
      linksSlice.actions.prologueSeviceRM({
        prologue: { ...prologue!, service: !prologue?.service },
      })
    );
  };

  const handleLeave = () => {
    dispatch(
      linksSlice.actions.prologueSeviceRM({
        prologue: { ...prologue!, service: false },
      })
    );
  };

  return (
    <Container>
      <Text>
        <Title>
          <Span>Brontosaur </Span> — ваш гид в&nbsp;мире ресторанов, баров и
          кафе
        </Title>
        <Subtitle>
          С нашим сервисом бронирование столиков становится легким и удобным как
          никогда
        </Subtitle>
        <Join
          href="#request"
          $hovered={prologue?.service!}
          onTouchStart={handleServicePrologue}
          onTouchEnd={handleLeave}
          onMouseEnter={handleServicePrologue}
          onMouseLeave={handleLeave}
        >
          Присоединиться
        </Join>
      </Text>
      <MockupImage>
        <Image_ src={data.links.prologue} width={486} height={894}></Image_>
      </MockupImage>
    </Container>
  );
};

const MockupImage = styled.div`
  ${(p) => (p.className = "MockupImage")};
  display: flex;
  transform: translate(calc(6 * var(--dv)), 0);
  @media (max-width: 48rem) {
    position: absolute;
    bottom: calc(-277 * var(--mv));
    right: calc(20 * var(--mv));
  }
`;

const Container = styled.section`
  ${(p) => (p.className = "Container")};
  width: calc(1440 * var(--dv));
  display: flex;
  margin-top: calc(54.74 * var(--dv));
  height: calc(609 * var(--dv));
  overflow: hidden;
  justify-content: center;

  @media (max-width: 48rem) {
    width: calc(768 * var(--mv));
    height: calc(1050 * var(--mv));
    flex-direction: column;
    align-items: center;
    justify-content: start;
    margin: 0;
    transform: translate(0, calc(0 * var(--dv)));
  }
`;

const Text = styled.div`
  ${(p) => (p.className = "Text")};
  display: flex;
  flex-direction: column;
  gap: calc(30 * var(--dv));
  margin-top: calc(59.26 * var(--dv));

  @media (max-width: 48rem) {
    gap: calc(30 * var(--mv));
    margin-top: calc(101 * var(--mv));
  }
`;

const Title = styled.h1`
  ${(p) => (p.className = "Title")};
  width: calc(813 * var(--dv));
  height: fit-content;

  font-family: Raleway;
  font-size: calc(64 * var(--dv));
  font-weight: 600;
  line-height: calc(70.4 * var(--dv));
  text-align: left;
  color: black;

  @media (max-width: 48rem) {
    width: calc(728 * var(--mv));
    font-size: calc(64 * var(--mv));
    line-height: calc(70.4 * var(--mv));
  }
`;

const Span = styled.span`
  ${(p) => (p.className = "Span")};
  color: var(--main);
`;

const Subtitle = styled.p`
  ${(p) => (p.className = "Subtitle")};
  width: calc(530 * var(--dv));
  height: calc(62 * var(--dv));

  font-family: Raleway;
  font-size: calc(22 * var(--dv));
  font-weight: 400;
  line-height: calc(30.8 * var(--dv));
  text-align: left;

  color: var(--secondary);

  @media (max-width: 48rem) {
    width: calc(530 * var(--mv));
    height: calc(62 * var(--mv));
    font-size: calc(22 * var(--mv));
    line-height: calc(30.8 * var(--mv));
  }
`;

const Join = styled.a<{ $hovered: boolean }>`
  width: calc(208 * var(--dv));
  height: calc(50 * var(--dv));
  padding: calc(10 * var(--dv)) calc(20 * var(--dv));
  gap: calc(80 * var(--dv));
  border-radius: calc(10 * var(--dv));

  background: ${(p) => (p.$hovered ? "var(--primary)" : "var(--main)")};
  color: white;
  margin-top: calc(9 * var(--dv));

  font-family: Raleway;
  font-size: calc(14 * var(--dv));
  font-weight: 500;
  line-height: calc(18 * var(--dv));
  text-align: left;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 48rem) {
    width: fit-content;
    height: fit-content;
    padding: calc(21 * var(--mv)) calc(24 * var(--mv));
    border-radius: calc(10 * var(--mv));
    font-size: calc(18 * var(--mv));
    line-height: calc(24 * var(--mv));
    margin-top: calc(30 * var(--mv));
  }
`;
