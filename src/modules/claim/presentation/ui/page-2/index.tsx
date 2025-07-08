import loadable from "@loadable/component";
import Loading from "@components/loading";

export const ClaimPageTwo = loadable(() => import("./dashboard-page"), {
  fallback: <Loading />,
});
