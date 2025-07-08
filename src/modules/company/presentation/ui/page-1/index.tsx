import loadable from "@loadable/component";
import Loading from "@components/loading";

export const CompanyPageOne = loadable(() => import("./dashboard-page"), {
  fallback: <Loading />,
});
