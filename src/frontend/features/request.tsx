import { RequestFormPopup } from "src/frontend/entities/request-form-popup";
import { RequestSuccessPopup } from "src/frontend/entities/request-success-popup";
import { useDispatch_, useSelector_ } from "src/frontend/shared/global-state";
import { linksSlice } from "src/frontend/shared/global-state/slices/links";
import { popupSlice } from "src/frontend/shared/global-state/slices/popup";
import { styled } from "styled-components";

export const Request_ = () => {
  const dispatch = useDispatch_();

  const { request } = useSelector_((s) => s.linksSlice);
  const { request: requestPopup } = useSelector_((s) => s.popupSlice);

  const handleRequestForm = () => {
    dispatch(
      linksSlice.actions.requestFormRM({
        request: { ...request!, form: !request?.form },
      })
    );
  };

  const handleLeave = () => {
    dispatch(
      linksSlice.actions.requestFormRM({
        request: { ...request!, form: false },
      })
    );
  };

  const handleButtonClick = () => {
    dispatch(
      popupSlice.actions.requestFormRM({
        request: {
          ...requestPopup,
          form: !requestPopup?.form,
        },
      })
    );
  };

  return (
    <Container>
      <TextBox>
        <Title>Оставить заявку на подключение</Title>
        <Text>Заполните данные для подключения к сервису</Text>
      </TextBox>
      <Button
        id="request"
        $hovered={request?.form!}
        onTouchStart={handleRequestForm}
        onTouchEnd={handleLeave}
        onMouseEnter={handleRequestForm}
        onMouseLeave={handleLeave}
        onClick={handleButtonClick}
      >
        Указать свои контакты
      </Button>
      <RequestFormPopup></RequestFormPopup>
      <RequestSuccessPopup></RequestSuccessPopup>
    </Container>
  );
};

const Container = styled.section`
  ${(p) => (p.className = "Container")};
  display: flex;
  justify-content: space-between;
  width: calc(1368 * var(--dv));
  height: calc(168 * var(--dv));
  padding: calc(40 * var(--dv));
  border-radius: calc(14 * var(--dv));

  background: var(--accent);
  margin: calc(24 * var(--dv)) auto calc(160 * var(--dv));

  @media (max-width: 48rem) {
    width: calc(728 * var(--mv));
    height: calc(264 * var(--mv));
    padding: calc(40 * var(--mv));
    gap: calc(40 * var(--mv));
    border-radius: calc(14 * var(--mv));
    margin: calc(20 * var(--mv)) auto calc(120 * var(--mv));
    flex-direction: column;
  }
`;

const Title = styled.strong`
  ${(p) => (p.className = "Title")};
  width: calc(550 * var(--dv));
  height: fit-content;

  font-family: Raleway;
  font-size: calc(32 * var(--dv));
  font-weight: 600;
  line-height: calc(40 * var(--dv));
  text-align: left;

  @media (max-width: 48rem) {
    width: fit-content;
    font-size: calc(32 * var(--mv));
    line-height: calc(40 * var(--mv));
  }
`;

const Text = styled.p`
  ${(p) => (p.className = "Text")};
  width: calc(409 * var(--dv));
  height: calc(24 * var(--dv));

  font-family: Raleway;
  font-size: calc(18 * var(--dv));
  font-weight: 500;
  line-height: calc(24 * var(--dv));
  text-align: left;

  color: var(--secondary);

  @media (max-width: 48rem) {
    width: calc(409 * var(--mv));
    height: calc(24 * var(--mv));
    font-size: calc(18 * var(--mv));
    line-height: calc(24 * var(--mv));
  }
`;

const TextBox = styled.div`
  ${(p) => (p.className = "TextBox")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 48rem) {
    gap: calc(20 * var(--mv));
  }
`;

const Button = styled.button<{ $hovered: boolean }>`
  width: calc(283 * var(--dv));
  height: calc(50 * var(--dv));
  padding: calc(10 * var(--dv)) calc(30 * var(--dv));
  border-radius: calc(10 * var(--dv));

  background: ${(p) => (p.$hovered ? "var(--primary)" : "var(--main)")};
  color: white;

  font-family: Raleway;
  font-size: calc(14 * var(--dv));
  font-weight: 500;
  line-height: calc(18 * var(--dv));
  text-align: left;

  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(0, calc(19 * var(--dv)));

  @media (max-width: 48rem) {
    transform: translate(0, 0);
    width: calc(648 * var(--mv));
    height: calc(60 * var(--mv));
    padding: calc(14 * var(--mv)) calc(30 * var(--mv));
    border-radius: calc(10 * var(--mv));
    font-size: calc(14 * var(--mv));
    line-height: calc(18 * var(--mv));
  }
`;
