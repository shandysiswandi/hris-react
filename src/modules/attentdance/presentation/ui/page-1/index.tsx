import loadable from "@loadable/component";
import Loading from "@components/loading";

export const AttentdancePageOne = loadable(() => import("./dashboard-page"), {
  fallback: <Loading />,
});
