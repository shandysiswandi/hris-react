import loadable from "@loadable/component";
import Loading from "@components/loading";

export const AttentdancePageTwo = loadable(() => import("./dashboard-page"), {
  fallback: <Loading />,
});
