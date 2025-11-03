import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import { LeaveProvider } from "./context/LeaveContext";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <LeaveProvider>
      <ToastContainer position="top-right" autoClose={3000} />
      <RouterProvider router={router} />
    </LeaveProvider>
  );
};

export default App;
