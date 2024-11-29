import { JoinService } from "src/frontend/entities/join-service";
import { data } from "src/frontend/api";
import { styled } from "styled-components";

type TProps = Partial<{
  children: JSX.Element;
}>;

export const MainFunctionality = (_props?: TProps) => {
  return (
    <Container>
      <JoinService
        title="Основной функционал"
        cards={data.main_functionality}
      ></JoinService>
    </Container>
  );
};

const Container = styled.section`
  ${(p) => (p.className = "Container")};
  display: flex;
  padding: calc(40 * var(--dv)) 0 0 0;
`;
