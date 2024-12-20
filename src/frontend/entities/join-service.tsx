import { CardsMap } from "src/frontend/entities/cards-map";
import { Image_ } from "src/frontend/entities/image";
import { Title } from "src/frontend/entities/title";
import { data } from "src/frontend/api";
import { useDispatch_, useSelector_ } from "src/frontend/shared/global-state";
import { cardsSlice } from "src/frontend/shared/global-state/slices/cards";
import { styled } from "styled-components";

type TProps = Partial<{
  title: string;
  cards: {
    name: string;
    image: string;
    text: string;
  }[];
}>;

export const JoinService = (_props?: TProps) => {
  const dispatch = useDispatch_();

  const { hover } = useSelector_((s) => s.cardsSlice);

  const action = () => {
    dispatch(
      cardsSlice.actions.hoverAdvantagesRM({
        hover: { ...hover, advantages: !hover?.advantages },
      })
    );
  };

  const handleBoxHover = () => {
    action();
  };

  const handleLeave = () => {
    action();
  };

  return (
    <Container>
      <Title>{_props?.title}</Title>
      <CardsJoinBox>
        <CardsMap cards={_props?.cards!}></CardsMap>
        <JoinBox
          $hovered={hover?.advantages!}
          href="#request"
          onTouchStart={handleBoxHover}
          onTouchEnd={handleLeave}
          onMouseEnter={handleBoxHover}
          onMouseLeave={handleLeave}
        >
          <JoinTitle $hovered={hover?.advantages!}>
            Присоединиться к сервису
          </JoinTitle>
          <ImageBox>
            <Image_
              src={`${
                hover?.advantages
                  ? data.links.join.black
                  : data.links.join.white
              }`}
              width={50}
              height={50}
            ></Image_>
          </ImageBox>
        </JoinBox>
      </CardsJoinBox>
    </Container>
  );
};

const Container = styled.section`
  ${(p) => (p.className = "Container")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: calc(60 * var(--dv));
  width: calc(1440 * var(--dv));
  height: calc(898 * var(--dv));
  border-radius: calc(40 * var(--dv));
  background: var(--accent);

  @media (max-width: 48rem) {
    position: relative;
    padding: calc(120 * var(--mv)) 0 calc(100 * var(--mv));
    width: calc(768 * var(--mv));
    height: fit-content;
    gap: calc(60 * var(--mv));
    border-radius: calc(40 * var(--mv));
  }
`;

const CardsJoinBox = styled.div`
  ${(p) => (p.className = "CardsJoinBox")};
  position: relative;
`;

const JoinBox = styled.a<{ $hovered: boolean }>`
  width: calc(440 * var(--dv));
  height: calc(260 * var(--dv));
  padding: calc(30 * var(--dv));
  border-radius: calc(14 * var(--dv));

  background: ${(p) => (p.$hovered ? "#fff" : "var(--main)")};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: absolute;
  bottom: 0;
  right: 0;

  @media (max-width: 48rem) {
    border-radius: calc(14 * var(--mv));
    position: static;
    width: calc(728 * var(--mv));
    height: calc(200 * var(--mv));
    margin: calc(20 * var(--mv)) 0 calc(20 * var(--mv));
    padding: calc(30 * var(--mv));
  }
`;

const JoinTitle = styled.strong<{ $hovered: boolean }>`
  width: calc(180 * var(--dv));
  height: fit-content;

  font-family: Raleway;
  font-size: calc(22 * var(--dv));
  font-weight: 600;
  line-height: calc(28.6 * var(--dv));
  text-align: left;

  color: ${(p) => (p.$hovered ? "var(--primary)" : "#fff")};
  transform: translate(0, calc(-5 * var(--dv)));

  @media (max-width: 48rem) {
    width: calc(668 * var(--mv));
    font-size: calc(22 * var(--mv));
    line-height: calc(28.6 * var(--mv));
  }
`;

const ImageBox = styled.div`
  ${(p) => (p.className = "ImageBox")};
  display: flex;
  justify-content: end;
`;
