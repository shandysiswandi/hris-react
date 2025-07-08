import loadable from "@loadable/component";
import Loading from "@components/loading";

export const EmployeePageTwo = loadable(() => import("./dashboard-page"), {
  fallback: <Loading />,
});
