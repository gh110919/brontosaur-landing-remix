import "./globals.css";
import "./style.css";
import "./tailwind.css";
/*  */
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  useRouteError,
} from "@remix-run/react";
import { NotFound } from "BASE/not-found";
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
          <Meta />
          <Links />
        </head>
        <>{_props.children}</>
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
