import { SyntheticEvent, useEffect, useRef } from "react";

import { styled } from "styled-components";

const Dialog = styled.dialog<{ $visible: boolean; $backdrop: boolean }>`
  display: ${(p) => (p.$visible ? "flex" : "none")};
  justify-content: center;
  align-items: center;

  top: 0;
  left: 0;
  z-index: 9999;

  min-width: 100%;
  min-height: 100%;

  position: fixed;

  background-color: ${(p) =>
    p.$backdrop ? "rgba(255, 255, 255, 0.5)" : "transparent"};
  backdrop-filter: ${(p) =>
    p.$backdrop ? `blur(calc(8 * var(--dv)))` : "none"};
  border: none;
`;

const ContentBox = styled.div`
  ${(p) => (p.className = "ContentBox")};
  position: absolute;
`;

type TProps = Partial<{
  state: boolean;
  backdrop: boolean;
  overlayClose: boolean;
  children: JSX.Element;
}>;

export const Popup = (props: TProps) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    props.state ? ref.current?.showModal() : ref.current?.close();
  }, [props.state]);

  const handleClose = () => {
    ref.current?.close();
  };

  const handleClick = (e: SyntheticEvent) => {
    e.target === e.currentTarget ? handleClose() : null;
  };

  return (
    <Dialog
      ref={ref}
      $visible={props.state!}
      $backdrop={props.backdrop!}
      onClick={props.overlayClose ? handleClick : undefined}
    >
      <ContentBox onClick={(e) => e.preventDefault()}>
        {props.children}
      </ContentBox>
    </Dialog>
  );
};
