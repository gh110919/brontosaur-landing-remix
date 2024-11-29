import { AdditionalAdvantages } from "src/frontend/features/additional-advantages";
import { Advantages } from "src/frontend/features/advantages";
import { Available } from "src/frontend/features/available";
import { Booking } from "src/frontend/features/booking";
import { Connections } from "src/frontend/features/connections";
import { Epilogue } from "src/frontend/features/epilogue";
import { Essence } from "src/frontend/features/essence";
import { Functional } from "src/frontend/features/functional";
import { MainAdvantages } from "src/frontend/features/main-advantages";
import { MainFunctionality } from "src/frontend/features/main-functionality";
import { Menu } from "src/frontend/features/menu";
import { Owners } from "src/frontend/features/owners";
import { Prologue } from "src/frontend/features/prologue";
import { What } from "src/frontend/features/what";
import { Request_ } from "src/frontend/features/request";
import { styled } from "styled-components";

export const Main = () => {
  return (
    <Main_>
      <noscript>
        <div>
          <img
            src="https://mc.yandex.ru/watch/98271362"
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
      <Prologue></Prologue>
      <Advantages></Advantages>
      <Essence></Essence>
      <Functional></Functional>
      <Available></Available>
      <Owners></Owners>
      <MainFunctionality></MainFunctionality>
      <What></What>
      <MainAdvantages></MainAdvantages>
      <Booking></Booking>
      <AdditionalAdvantages></AdditionalAdvantages>
      <Menu></Menu>
      <Connections></Connections>
      <Epilogue></Epilogue>
      <Request_></Request_>
    </Main_>
  );
};

const Main_ = styled.main`
  ${(p) => (p.className = "Main")};
  width: calc(1440 * var(--dv));
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 48rem) {
    width: calc(768 * var(--mv));
  }
`;
