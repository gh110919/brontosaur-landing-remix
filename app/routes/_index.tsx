import type { MetaFunction } from "@remix-run/node";
import { lazy, Suspense } from "react";
import { data } from "src/frontend/api";

type Meta = Partial<{
  title: string;
  name:
    | "description"
    | "keywords"
    | "robots"
    | "google-site-verification"
    | "yandex-verification"
    | "twitter:card"
    | "twitter:title"
    | "twitter:description"
    | "twitter:image";
  property:
    | "og:title"
    | "og:description"
    | "og:url"
    | "og:site_name"
    | "og:locale"
    | "og:image"
    | "og:type";
  content?: string | string[];
}>;

export const meta: MetaFunction = () => data.meta as Meta[];

const LazyIndex = lazy(() => import("PAGES/index-page"));

export default () => {
  return (
    <Suspense>
      <LazyIndex></LazyIndex>
    </Suspense>
  );
};
