import { Provider } from "react-redux";
import { rootStore } from "SHARED/global-state";
import { Footer } from "src/frontend/widgets/footer";
import { Header } from "src/frontend/widgets/header";
import { Main } from "src/frontend/widgets/main";

export default function IndexPage() {
  return (
    <Provider store={rootStore}>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </Provider>
  );
}
