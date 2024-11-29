import { Popup } from "src/frontend/features/popup";
import { useDispatch_, useSelector_ } from "src/frontend/shared/global-state";
import { popupSlice } from "src/frontend/shared/global-state/slices/popup";
import axios from "axios";
import { useEffect, useRef } from "react";
import { styled } from "styled-components";
import { Image_ } from "./image";
import { InputListMap } from "./input-list-map";
import { Title } from "./title";
import { TitleImageBox } from "./title-image-box";
import { data } from "src/frontend/api";

export const RequestFormPopup = () => {
  const dispatch = useDispatch_();

  const { request } = useSelector_((s) => s.popupSlice);

  const handleCrossClick = () => {
    dispatch(
      popupSlice.actions.requestFormRM({
        request: { ...request, form: !request?.form },
      })
    );
  };

  const inputs = useSelector_((s) => s.inputsSlice);

  const handleFormSubmit = async () => {
    await axios
      .post(data.mail_url, inputs)
      .then((r: any) => {
        if (r.data.success) {
          dispatch(
            popupSlice.actions.requestSuccessRM({
              request: { ...request, success: !request?.success },
            })
          );
        }
      })
      .catch((e) => {
        console.error(e);
        alert("Произошла ошибка отправки формы");
      });
  };

  const formRef = useRef<HTMLFormElement>(null);
  const submitRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    submitRef.current!.disabled = !formRef.current?.checkValidity();
  });

  return (
    <Popup backdrop state={request?.form}>
      <Form ref={formRef}>
        <TitleImageBox>
          <Title style={{ textAlign: "left" }}>Заполните форму</Title>
          <Image_
            src={data.links.request}
            width={50}
            height={50}
            onClick={handleCrossClick}
          ></Image_>
        </TitleImageBox>
        <Fieldset>
          <InputListMap></InputListMap>
        </Fieldset>
        <Submit type="submit" onClick={handleFormSubmit} ref={submitRef}>
          Отправить
        </Submit>
      </Form>
    </Popup>
  );
};

const Form = styled.form`
  ${(p) => (p.className = "Form")};
  width: calc(904 * var(--dv));
  height: calc(448 * var(--dv));
  padding: calc(40 * var(--dv));
  border-radius: calc(14 * var(--dv));

  background: var(--accent);

  display: flex;
  flex-direction: column;
  gap: calc(40 * var(--dv));

  @media (max-width: 48rem) {
    width: calc(728 * var(--mv));
    height: calc(716 * var(--mv));
    padding: calc(40 * var(--mv));
    border-radius: calc(14 * var(--mv));
  }
`;

const Fieldset = styled.fieldset`
  ${(p) => (p.className = "Fieldset")};
`;

const Submit = styled.button`
  ${(p) => (p.className = "Submit")};
  width: calc(824 * var(--dv));
  height: calc(50 * var(--dv));
  padding: calc(10 * var(--dv)) calc(30 * var(--dv));
  border-radius: calc(10 * var(--dv));

  font-family: Raleway;
  font-size: calc(14 * var(--dv));
  font-weight: 500;
  line-height: calc(18 * var(--dv));
  text-align: left;

  background: var(--main);
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 48rem) {
    width: calc(648 * var(--mv));
    height: calc(60 * var(--mv));
    padding: calc(15 * var(--mv)) calc(30 * var(--mv));
    border-radius: calc(10 * var(--mv));

    font-size: calc(14 * var(--mv));
    line-height: calc(18 * var(--mv));
  }
`;
