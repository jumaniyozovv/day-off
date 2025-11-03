import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LeaveProvider } from "./context/LeaveContext";
import Header from "./components/Header";
import {ToastContainer}from 'react-toastify'
import CalendarPage from "./pages/CalendarPage";
import LeaveForm from "./components/LeaveForm";
import LeaveList from "./components/LeaveList";

const App = () => {
  return (
    <LeaveProvider>
      <Router>
        <Header />
        <div className="w-full mx-auto">
          <Routes>
            <Route path="/" element={<CalendarPage />} />
            <Route path="/request" element={<LeaveForm />} />
            <Route path="/leaves" element={<LeaveList />} />
          </Routes>
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
      </Router>
    </LeaveProvider>
  );
};

export default App;
