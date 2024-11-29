import { lazy, Suspense } from "react";
import Loading from "./loading";
import { Body } from "src/frontend/entities/body";
import { ScrollRestoration, Scripts } from "@remix-run/react";

export const Entry = () => {
  const DynamicIndex = lazy(() => import("../pages/index-page"));

  return (
    <Body>
      <Suspense fallback={<Loading></Loading>}>
        <DynamicIndex></DynamicIndex>
      </Suspense>
      <noscript>
        <div>
          <img
            src="https://mc.yandex.ru/watch/98271362"
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
      <ScrollRestoration />
      <Scripts />
    </Body>
  );
};
