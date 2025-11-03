import  { useState, useContext } from "react";
import { LeaveContext } from "../context/LeaveContext";
import { toast } from "react-toastify";

const LeaveForm = () => {
  const { addLeave } = useContext(LeaveContext);

  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    type: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { startDate, endDate, type } = formData;
    if (!startDate || !endDate || !type) {
      toast.error("Please fill all required fields!");
      return;
    }

    if (new Date(endDate) < new Date(startDate)) {
      toast.error("End date cannot be earlier than start date!");
      return;
    }

    const newLeave = {
      id: Date.now(),
      ...formData,
      status: "Pending",
    };

    addLeave(newLeave);
    toast.success("Leave request submitted!");
    setFormData({ startDate: "", endDate: "", type: "", reason: "" });
  };

  return (
    <div className="w-full h-[80vh] flex items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="w-[400px] p-6 bg-white border shadow-md rounded-xl"
      >
        <h2 className="text-2xl font-bold  text-center">
          Request a Day-Off
        </h2>

        <div className="flex flex-col gap-4">
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="border outline-none p-2 rounded-md"
          />
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="border outline-none p-2 rounded-md"
          />

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="border outline-none p-2 rounded-md"
          >
            <option value="">Select Type</option>
            <option value="Vacation">Vacation</option>
            <option value="Sick Leave">Sick Leave</option>
            <option value="Unpaid Leave">Unpaid Leave</option>
            <option value="Paid Leave">Paid Leave</option>
          </select>

          <textarea
            name="reason"
            placeholder="Reason (optional)"
            value={formData.reason}
            onChange={handleChange}
            className="border outline-none p-2 rounded-md"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LeaveForm;
