import loadable from "@loadable/component";
import Loading from "@components/loading";

export const LoginPage = loadable(() => import("./page"), {
  fallback: <Loading />,
});
