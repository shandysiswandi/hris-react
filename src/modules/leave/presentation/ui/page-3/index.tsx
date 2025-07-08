import loadable from "@loadable/component";
import Loading from "@components/loading";

export const LeavePageThree = loadable(() => import("./dashboard-page"), {
  fallback: <Loading />,
});
