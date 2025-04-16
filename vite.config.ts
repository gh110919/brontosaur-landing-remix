import { vitePlugin } from "@remix-run/dev";
import { defineConfig, ServerOptions } from "vite";

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

const options: ServerOptions = {
  host: "0.0.0.0",
  port: 3000,
};

export default defineConfig({
  plugins: [
    vitePlugin({
      ssr: true,
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
    }),
    (await import("vite-tsconfig-paths")).default(),
  ],
  server: options,
  preview: options,
});
