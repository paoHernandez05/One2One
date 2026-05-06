import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/user/LandingPage";
import RegisterUserLayout from "./pages/user/RegisterUserLayout";
import LoginForm from "./components/RegisterUserPage/LoginForm";
import RegisterForm from "./components/RegisterUserPage/RegisterForm";
import VerifyForm from "./components/RegisterUserPage/VerifyForm";
import AppPage from "./pages/user/AppPage";
import ChatPage from "./pages/user/ChatPage";
import SettingsPage from "./pages/user/SettingsPage";
import ProfilePage from "./components/SettingsPage/ProfilePage";
import AccountPage from "./components/SettingsPage/AccountPage";
import BlockedPage from "./components/SettingsPage/BlockedPage";
import { Toaster } from "react-hot-toast";
import "./index.css";
const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  {
    path: "/auth",
    element: <RegisterUserLayout />,
    children: [
      { index: true, element: <LoginForm /> },
      { path: "login", element: <LoginForm /> },
      { path: "register", element: <RegisterForm /> },
      { path: "verify", element: <VerifyForm /> },
    ],
  },
  { path: "/test", element: <AppPage /> },

  {
    path: "/chat",
    children: [
      { index: true, element: <ChatPage /> },
      {
        path: "settings",
        element: <SettingsPage />,
        children: [
          { index: true, element: <ProfilePage /> },
          { path: "account", element: <AccountPage /> },

          { path: "blocked", element: <BlockedPage /> },
        ],
      },
    ],
  },

  /*,
  { path: "/profile/:userid", element: <UserProfilePage /> },
  { path: "/call", element: <CallPage /> },
  { path: "/admin", element: <AdminMainPage /> },
  { path: "/admin/server", element: <AdminServerPage /> },
  { path: "/admin/provider", element: <AdminProviderPage /> },
  { path: "/admin/reports", element: <AdminReportsPage /> },
  { path: "/admin/users", element: <AdminUsersPage /> },
  { path: "/admin/calls", element: <AdminCallsPage /> },
  { path: "/admin/settings", element: <AdminSettingsPage /> },*/
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "white",
            border: "1px solid #e0e5eb",
            color: "#1f2937",
            fontSize: "15px",
            fontWeight: "550",
            borderRadius: "10px",
          },
        }}
      />
      <RouterProvider router={router} />
    </>
  </StrictMode>
);
