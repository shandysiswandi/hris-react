import loadable from "@loadable/component";
import Loading from "@components/loading";

export const AttentdancePageThree = loadable(() => import("./dashboard-page"), {
  fallback: <Loading />,
});
