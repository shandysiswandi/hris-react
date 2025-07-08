import loadable from "@loadable/component";
import Loading from "@components/loading";

export const CompanyPageTwo = loadable(() => import("./dashboard-page"), {
  fallback: <Loading />,
});
