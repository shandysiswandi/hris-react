import loadable from "@loadable/component";
import Loading from "@components/loading";

export const WorkflowPageOne = loadable(() => import("./dashboard-page"), {
  fallback: <Loading />,
});
