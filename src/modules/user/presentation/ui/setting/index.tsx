import loadable from "@loadable/component";
import Loading from "@components/loading";

export const SettingPage = loadable(() => import("./page"), {
  fallback: <Loading />,
});
