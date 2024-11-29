import { Image_ } from "src/frontend/entities/image";
import { NumberedButton } from "src/frontend/entities/numbered-button";
import { NumberedCard } from "src/frontend/entities/numbered-card";
import { useExpectedWidth } from "src/frontend/shared/expected-width";
import { useDispatch_, useSelector_ } from "src/frontend/shared/global-state";
import { cardsSlice } from "src/frontend/shared/global-state/slices/cards";
import { styled } from "styled-components";

type Capitalize<T extends string> = T extends `${infer F}${infer R}`
  ? `${Uppercase<F>}${R}`
  : T;

type TSlice = "what" | "essense" | "available" | "booking" | "menu";
type TReducer = Capitalize<TSlice>;

type TProps = Partial<{
  slice: TSlice;
  title: string;
  image: string;
  data: {
    name: string;
    title?: string;
    text?: string;
    reverse?: boolean;
    position: {
      pc: {
        top?: number;
        left?: number;
        right?: number;
        bottom?: number;
      };
      mobile: {
        top?: number;
        left?: number;
        right?: number;
        bottom?: number;
      };
    };
  }[];
}>;

export const capitalize = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

export const WhatCards = (_props?: TProps) => {
  const dispatch = useDispatch_();
  const { selected } = useSelector_((s) => s.cardsSlice);

  const client = typeof window !== "undefined" ? window : undefined;
  const width = useExpectedWidth(768, client);

  const action = (i?: number) => {
    dispatch(
      cardsSlice.actions[`selected${capitalize(_props?.slice!) as TReducer}RM`](
        {
          selected: { ...selected, [_props?.slice!]: i },
        }
      )
    );
  };

  const handleElementSelect = (i?: number) => {
    action(i);
  };

  const handleImageClick = () => {
    action();
  };

  return (
    <Container>
      <Title>{_props?.title!}</Title>
      <ImageMapBox>
        <Image_
          src={_props?.image!}
          width={!width ? 1022 : 728}
          height={!width ? 622 : 443}
          onClick={handleImageClick}
        ></Image_>
        <ul>
          {_props?.data?.map((e, i) => {
            return (
              <li key={i}>
                <ButtonBox $position={e.position}>
                  <NumberedButton onClick={() => handleElementSelect(i)}>
                    <p>{e.name}</p>
                    <NumberedCard
                      visible={i === selected![_props?.slice!]}
                      reverse={e.reverse}
                      title={e.title}
                      text={e.text}
                      name={e.name}
                    ></NumberedCard>
                  </NumberedButton>
                </ButtonBox>
              </li>
            );
          })}
        </ul>
      </ImageMapBox>
    </Container>
  );
};

const ImageMapBox = styled.div`
  ${(p) => (p.className = "ImageMapBox")};
  display: flex;
  position: relative;
`;

type TButtonBoxProps = {
  $position: {
    pc: Partial<{
      top: number;
      bottom: number;
      right: number;
      left: number;
    }>;
    mobile: Partial<{
      top: number;
      bottom: number;
      right: number;
      left: number;
    }>;
  };
};

const ButtonBox = styled.div<TButtonBoxProps>`
  ${(p) => (p.className = "ButtonBox")};
  display: flex;
  position: absolute;
  z-index: 10;
  top: ${(p) => {
    return p.$position?.pc.top
      ? `calc(${p.$position?.pc.top} * var(--dv))`
      : "auto";
  }};
  right: ${(p) => {
    return p.$position?.pc.right
      ? `calc(${p.$position?.pc.right} * var(--dv))`
      : "auto";
  }};
  bottom: ${(p) => {
    return p.$position?.pc.bottom
      ? `calc(${p.$position?.pc.bottom} * var(--dv))`
      : "auto";
  }};
  left: ${(p) => {
    return p.$position?.pc.left
      ? `calc(${p.$position?.pc.left} * var(--dv))`
      : "auto";
  }};

  @media (max-width: 48rem) {
    top: ${(p) => {
      return p.$position?.mobile.top
        ? `calc(${p.$position?.mobile.top} * var(--mv))`
        : "auto";
    }};
    right: ${(p) => {
      return p.$position?.mobile.right
        ? `calc(${p.$position?.mobile.right} * var(--mv))`
        : "auto";
    }};
    bottom: ${(p) => {
      return p.$position?.mobile.bottom
        ? `calc(${p.$position?.mobile.bottom} * var(--mv))`
        : "auto";
    }};
    left: ${(p) => {
      return p.$position?.mobile.left
        ? `calc(${p.$position?.mobile.left} * var(--mv))`
        : "auto";
    }};
  }
`;

const Title = styled.strong`
  ${(p) => (p.className = "Title")};
  display: flex;
  justify-content: center;
  width: calc(600 * var(--dv));
  height: fit-content;
  font-family: Raleway;
  font-size: calc(46 * var(--dv));
  font-weight: 600;
  line-height: calc(54 * var(--dv));
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: var(--primary);
  @media (max-width: 48rem) {
    width: calc(520 * var(--mv));
    font-size: calc(46 * var(--mv));
    line-height: calc(54 * var(--mv));
  }
`;

const Container = styled.section`
  ${(p) => (p.className = "Container")};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: calc(60 * var(--dv));
  padding: calc(160 * var(--dv)) calc(210 * var(--dv));
  @media (max-width: 48rem) {
    gap: calc(60 * var(--mv));
    padding: calc(120 * var(--mv)) 0 calc(120 * var(--mv));
  }
`;
