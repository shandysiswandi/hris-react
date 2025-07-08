import loadable from "@loadable/component";
import Loading from "@components/loading";

export const WorkflowPageThree = loadable(() => import("./dashboard-page"), {
  fallback: <Loading />,
});
