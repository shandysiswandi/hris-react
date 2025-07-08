import loadable from "@loadable/component";
import Loading from "@components/loading";

export const ClaimPageThree = loadable(() => import("./dashboard-page"), {
  fallback: <Loading />,
});
