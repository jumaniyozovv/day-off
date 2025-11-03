// src/routes/router.jsx
import { createBrowserRouter } from "react-router-dom";
import LeaveList from "../components/LeaveList";
import NotFound from "../pages/NotFound";
import MainLayout from "../layout/MainLayout";
import CalendarPage from "../pages/CalendarPage";
import LeaveForm from "../components/LeaveForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <CalendarPage /> },
      { path: "leaves", element: <LeaveList /> },
      { path: "request", element: <LeaveForm /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
