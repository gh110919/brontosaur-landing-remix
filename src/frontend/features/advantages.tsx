import { JoinService } from "src/frontend/entities/join-service";
import { data } from "src/frontend/api";
import { styled } from "styled-components";

export const Advantages = () => {
  return (
    <Container>
      <JoinService
        title="Преимущества для вас"
        cards={data.cards}
      ></JoinService>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
`;
