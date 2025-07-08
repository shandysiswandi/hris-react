import loadable from "@loadable/component";
import Loading from "@components/loading";

export const ClaimPageOne = loadable(() => import("./dashboard-page"), {
  fallback: <Loading />,
});
