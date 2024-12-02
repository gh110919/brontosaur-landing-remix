import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import { Body } from "ENTITIES/body";
import { NotFound } from "PAGES/not-found";
import { Provider } from "react-redux";
import { rootStore } from "src/frontend/shared/global-state";

type LayoutProps = { children: React.ReactNode };

export function Layout(_props: LayoutProps) {
  return (
    <Provider store={rootStore}>
      <html lang="ru">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="globals.css" />
          <link rel="stylesheet" href="style.css" />
          <Meta></Meta>
          <Links></Links>
        </head>
        <Body>
          <noscript>
            <div>
              <img
                src="https://mc.yandex.ru/watch/98271362"
                style={{ position: "absolute", left: "-9999px" }}
                alt=""
              />
            </div>
          </noscript>
          {_props.children}
          <script type="module" src="metrika.js"></script>
          <ScrollRestoration></ScrollRestoration>
          <Scripts></Scripts>
        </Body>
      </html>
    </Provider>
  );
}

export default () => <Outlet></Outlet>;

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <NotFound></NotFound>;
    }

    throw new Error(`${error.status} ${error.statusText}`);
  }

  throw new Error(error instanceof Error ? error.message : "Unknown Error");
}
