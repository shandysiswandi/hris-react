import loadable from "@loadable/component";
import Loading from "@components/loading";

export const LeavePageTwo = loadable(() => import("./dashboard-page"), {
  fallback: <Loading />,
});
