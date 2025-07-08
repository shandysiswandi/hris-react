import loadable from "@loadable/component";
import Loading from "@components/loading";

export const EmployeePageThree = loadable(() => import("./dashboard-page"), {
  fallback: <Loading />,
});
