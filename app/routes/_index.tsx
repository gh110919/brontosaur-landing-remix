import type { MetaFunction } from "@remix-run/node";
import { Entry } from "APP/entry";
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

export default function Index() {
  return <Entry></Entry>;
}
