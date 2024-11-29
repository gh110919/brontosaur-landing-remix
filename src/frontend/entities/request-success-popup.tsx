import { Popup } from "src/frontend/features/popup";
import { useDispatch_, useSelector_ } from "src/frontend/shared/global-state";
import { popupSlice } from "src/frontend/shared/global-state/slices/popup";
import { styled } from "styled-components";

export const RequestSuccessPopup = () => {
  const dispatch = useDispatch_();

  const { request } = useSelector_((s) => s.popupSlice);

  const handleButtonClick = () => {
    dispatch(popupSlice.actions.default());
  };

  return (
    <Popup state={request?.success} backdrop={true}>
      <Container>
        <Content>
          <Title>Заявка успешно отправлена</Title>
          <Text>В течение рабочего дня с вами свяжется менеджер</Text>
        </Content>
        <Button onClick={handleButtonClick}>ОК</Button>
      </Container>
    </Popup>
  );
};

const Container = styled.section`
  ${(p) => (p.className = "Container")};
  display: flex;
  flex-direction: column;

  width: calc(672 * var(--dv));
  height: calc(259 * var(--dv));
  padding: calc(40 * var(--dv));
  border-radius: calc(14 * var(--dv));

  background: var(--accent);
  padding: calc(40 * var(--dv));
  gap: calc(40 * var(--dv));

  @media (max-width: 48rem) {
    width: calc(728 * var(--mv));
    height: calc(269 * var(--mv));
    padding: calc(40 * var(--mv));
    border-radius: calc(14 * var(--mv));
    gap: calc(40 * var(--mv));
  }
`;

const Title = styled.strong`
  ${(p) => (p.className = "Title")};
  font-family: Raleway;
  font-size: calc(32 * var(--dv));
  font-weight: 600;
  line-height: calc(40 * var(--dv));
  text-align: center;

  @media (max-width: 48rem) {
    width: calc(648 * var(--mv));
    font-size: calc(32 * var(--mv));
    line-height: calc(40 * var(--mv));
  }
`;

const Text = styled.p`
  ${(p) => (p.className = "Text")};
  font-family: Raleway;
  font-size: calc(22 * var(--dv));
  font-weight: 500;
  line-height: calc(28.6 * var(--dv));
  text-align: center;

  color: var(--secondary);

  @media (max-width: 48rem) {
    width: calc(648 * var(--mv));
    height: calc(29 * var(--mv));

    font-size: calc(22 * var(--mv));
    line-height: calc(28.6 * var(--mv));
  }
`;

const Content = styled.div`
  ${(p) => (p.className = "Content")};
  display: flex;
  flex-direction: column;
  gap: calc(20 * var(--dv));
`;

const Button = styled.button`
  ${(p) => (p.className = "Button")};
  width: calc(592 * var(--dv));
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
