import {
  ChangeEvent,
  Dispatch,
  HTMLInputTypeAttribute,
  SetStateAction,
} from "react";

import { styled } from "styled-components";

const Label = styled.label`
  ${(p) => (p.className = "Label")};
  font-family: Raleway;
  font-size: calc(18 * var(--dv));
  font-weight: 500;
  line-height: calc(24 * var(--dv));
  text-align: left;

  @media (max-width: 48rem) {
    width: calc(648 * var(--mv));
    height: calc(24 * var(--mv));
    font-size: calc(18 * var(--mv));
    line-height: calc(24 * var(--mv));
  }
`;

const Input = styled.input`
  ${(p) => (p.className = "Input")};
  width: calc(400 * var(--dv));
  height: calc(50 * var(--dv));
  padding: calc(10 * var(--dv)) calc(20 * var(--dv));
  border-radius: calc(10 * var(--dv));

  background: #ffffff;

  font-family: Raleway;
  font-size: calc(18 * var(--dv));
  font-weight: 500;
  line-height: calc(24 * var(--dv));
  text-align: left;

  &:focus {
    outline: calc(1 * var(--dv)) solid black;
  }

  &:invalid {
    outline: calc(1 * var(--dv)) solid red;
  }

  @media (max-width: 48rem) {
    width: calc(648 * var(--mv));
    height: calc(60 * var(--mv));
    padding: calc(10 * var(--mv)) calc(20 * var(--mv));
    border-radius: calc(10 * var(--mv));

    font-size: calc(18 * var(--mv));
    line-height: calc(24 * var(--mv));
  }
`;

const Container = styled.div`
  ${(p) => (p.className = "Container")};
  display: flex;
  flex-direction: column;
  gap: calc(10 * var(--dv));

  @media (max-width: 48rem) {
    gap: calc(10 * var(--mv));
  }
`;

type TProps = {
  type: HTMLInputTypeAttribute;
  name: string;
  label: string;
  pattern: string;
  title: string;
  setInputState: Dispatch<SetStateAction<any>>;
};

export const LabeledInput = (props: TProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.setInputState((prev: any) => ({
      ...prev!,
      [props.name]: e.target.value,
    }));
  };

  return (
    <Container>
      <Label htmlFor={props.name}>{props.label}</Label>
      <Input
        required
        type={props.type}
        name={props.name}
        id={props.name}
        pattern={props.pattern}
        title={props.title}
        onChange={handleInputChange}
      />
    </Container>
  );
};
