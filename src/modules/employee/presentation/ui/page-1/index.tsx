import loadable from "@loadable/component";
import Loading from "@components/loading";

export const EmployeePageOne = loadable(() => import("./dashboard-page"), {
  fallback: <Loading />,
});
