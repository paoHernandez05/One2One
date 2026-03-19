import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/user/LandingPage";
import "./index.css";
const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  /*{ path: "/register", element: <RegisterUserPage /> },
  { path: "/login", element: <LoginUserPage /> },
  { path: "/chat", element: <ChatPage /> },
  { path: "/settings", element: <SettingsPage /> },
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
    <RouterProvider router={router} />
  </StrictMode>
);
