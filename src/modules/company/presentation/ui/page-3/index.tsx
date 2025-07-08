import loadable from "@loadable/component";
import Loading from "@components/loading";

export const CompanyPageThree = loadable(() => import("./dashboard-page"), {
  fallback: <Loading />,
});
