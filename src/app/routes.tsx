import { Suspense, useEffect } from "react";
import { ConfigProvider } from "antd";
import { Route, Routes } from "react-router";
import { AttentdancePageOne } from "@modules/attentdance/presentation/ui/page-1";
import { AttentdancePageTwo } from "@modules/attentdance/presentation/ui/page-2";
import { AttentdancePageThree } from "@modules/attentdance/presentation/ui/page-3";
import { LoginPage } from "@modules/auth/presentation/ui/login";
import { ClaimPageOne } from "@modules/claim/presentation/ui/page-1";
import { ClaimPageTwo } from "@modules/claim/presentation/ui/page-2";
import { ClaimPageThree } from "@modules/claim/presentation/ui/page-3";
import { CompanyPageOne } from "@modules/company/presentation/ui/page-1";
import { CompanyPageTwo } from "@modules/company/presentation/ui/page-2";
import { CompanyPageThree } from "@modules/company/presentation/ui/page-3";
import { DashboardPage } from "@modules/dashboard/presentation/ui";
import { EmployeePageOne } from "@modules/employee/presentation/ui/page-1";
import { EmployeePageTwo } from "@modules/employee/presentation/ui/page-2";
import { EmployeePageThree } from "@modules/employee/presentation/ui/page-3";
import { LeavePageOne } from "@modules/leave/presentation/ui/page-1";
import { LeavePageTwo } from "@modules/leave/presentation/ui/page-2";
import { LeavePageThree } from "@modules/leave/presentation/ui/page-3";
import { ProfilePage } from "@modules/user/presentation/ui/profile";
import { SettingPage as UserSettingPage } from "@modules/user/presentation/ui/setting";
import { WorkflowPageOne } from "@modules/workflow/presentation/ui/page-1";
import { WorkflowPageTwo } from "@modules/workflow/presentation/ui/page-2";
import { WorkflowPageThree } from "@modules/workflow/presentation/ui/page-3";
import Loading from "@components/loading";
import MainLayout from "@layouts/main";
import { NotFoundPage } from "@pages/error-404";
import { useAuthStore } from "@stores/auth-store";
import { antConfig } from "./ant-config";
import { ErrorBoundary } from "./error-boundary";

const UnauthorizedSection = () => {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

const AuthorizedSection = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<DashboardPage />} />

          <Route path="employee">
            <Route path="page-1" element={<EmployeePageOne />} />
            <Route path="page-2" element={<EmployeePageTwo />} />
            <Route path="page-3" element={<EmployeePageThree />} />
          </Route>

          <Route path="attentdance">
            <Route path="page-1" element={<AttentdancePageOne />} />
            <Route path="page-2" element={<AttentdancePageTwo />} />
            <Route path="page-3" element={<AttentdancePageThree />} />
          </Route>

          <Route path="leave">
            <Route path="page-1" element={<LeavePageOne />} />
            <Route path="page-2" element={<LeavePageTwo />} />
            <Route path="page-3" element={<LeavePageThree />} />
          </Route>

          <Route path="claim">
            <Route path="page-1" element={<ClaimPageOne />} />
            <Route path="page-2" element={<ClaimPageTwo />} />
            <Route path="page-3" element={<ClaimPageThree />} />
          </Route>

          <Route path="company">
            <Route path="page-1" element={<CompanyPageOne />} />
            <Route path="page-2" element={<CompanyPageTwo />} />
            <Route path="page-3" element={<CompanyPageThree />} />
          </Route>

          <Route path="workflow">
            <Route path="page-1" element={<WorkflowPageOne />} />
            <Route path="page-2" element={<WorkflowPageTwo />} />
            <Route path="page-3" element={<WorkflowPageThree />} />
          </Route>

          <Route path="user">
            <Route path="profile" element={<ProfilePage />} />
            <Route path="setting" element={<UserSettingPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default function AppRoutes() {
  const { isAuthorized, loadAuthFromCookie } = useAuthStore();

  useEffect(() => {
    loadAuthFromCookie();
  }, []);

  return (
    <ErrorBoundary>
      <ConfigProvider {...antConfig}>
        {isAuthorized ? <AuthorizedSection /> : <UnauthorizedSection />}
      </ConfigProvider>
    </ErrorBoundary>
  );
}
