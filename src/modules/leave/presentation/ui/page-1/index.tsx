import loadable from "@loadable/component";
import Loading from "@components/loading";

export const LeavePageOne = loadable(() => import("./dashboard-page"), {
  fallback: <Loading />,
});
