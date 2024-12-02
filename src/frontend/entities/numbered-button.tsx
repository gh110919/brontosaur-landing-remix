import { styled } from "styled-components";

type TNumberedButtonProps = Partial<{
  $backColor: string;
  $textColor: string;
}>;

export const NumberedButton = styled.div<TNumberedButtonProps>`
  width: calc(50 * var(--dv));
  height: calc(50 * var(--dv));
  padding: calc(10 * var(--dv)) calc(20 * var(--dv));
  border-radius: calc(10 * var(--dv));

  font-family: Raleway;
  font-size: calc(14 * var(--dv));
  font-weight: 500;
  line-height: calc(18 * var(--dv));
  text-align: right;
  background: ${(p) => (p.$backColor ? p.$backColor : "var(--main)")};
  color: ${(p) => (p.$textColor ? p.$textColor : "white")};
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  @media (max-width: 48rem) {
    border-radius: calc(10 * var(--mv));
    width: calc(60 * var(--mv));
    height: calc(60 * var(--mv));
    font-size: calc(14 * var(--mv));
    line-height: calc(18 * var(--mv));
  }
`;
