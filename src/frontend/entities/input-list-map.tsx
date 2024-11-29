import { data } from "src/frontend/api";
import { useEffect, useState } from "react";
import { useDispatch_, useSelector_ } from "src/frontend/shared/global-state";
import { inputsSlice } from "src/frontend/shared/global-state/slices/inputs";
import { styled } from "styled-components";
import { LabeledInput } from "./labeled-input";

export const InputListMap = () => {
  const dispatch = useDispatch_();
  const inputs = useSelector_((s) => s.inputsSlice);

  const [stateInput, setInputState] = useState<{
    establishment: string;
    fio: string;
    tel: string;
    email: string;
  }>();

  useEffect(() => {
    dispatch(
      inputsSlice.actions.inputsRM({
        ...inputs,
        establishment: stateInput?.establishment,
        fio: stateInput?.fio,
        tel: stateInput?.tel,
        email: stateInput?.email,
      })
    );
  }, [dispatch, inputs, stateInput]);

  return (
    <InputList>
      {data.inputs.map((e, i) => {
        return (
          <li key={i}>
            <LabeledInput
              type={e.type}
              name={e.name}
              label={e.label}
              pattern={e.pattern}
              title={e.title}
              setInputState={setInputState}
            ></LabeledInput>
          </li>
        );
      })}
    </InputList>
  );
};

const InputList = styled.ul`
  ${(p) => (p.className = "InputList")};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: calc(20 * var(--dv)) calc(24 * var(--dv));

  @media (max-width: 48rem) {
    grid-template-columns: repeat(1, 1fr);
    gap: calc(20 * var(--mv));
  }
`;
