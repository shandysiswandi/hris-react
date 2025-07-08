import loadable from "@loadable/component";
import Loading from "@components/loading";

export const ProfilePage = loadable(() => import("./page"), {
  fallback: <Loading />,
});
