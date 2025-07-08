import loadable from "@loadable/component";
import Loading from "@components/loading";

export const DashboardPage = loadable(() => import("./dashboard-page"), {
  fallback: <Loading />,
});
