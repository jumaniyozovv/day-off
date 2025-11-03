import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useContext } from "react";
import { LeaveContext } from "../context/LeaveContext";

const LeaveForm = () => {
  const { addLeave } = useContext(LeaveContext);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const startDate = new Date(data.startDate);
    const endDate = new Date(data.endDate);

    if (endDate < startDate) {
      toast.error("❌ End date cannot be earlier than start date!");
      return;
    }

    const newLeave = {
      ...data,
      status: "Pending",
    };

    addLeave(newLeave);
    toast.success("✅ Leave request submitted successfully!");
    reset();
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">
           Leave Request Form
        </h2>

        {/* Leave Type */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Leave Type
          </label>
          <select
            {...register("type", { required: "Please select leave type" })}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          >
            <option value="">-- Select Type --</option>
            <option value="Vacation">Vacation</option>
            <option value="Sick Leave">Sick Leave</option>
            <option value="Paid Leave">Paid Leave</option>
            <option value="Unpaid Leave">Unpaid Leave</option>
          </select>
          {errors.type && (
            <p className="text-red-500 text-sm mt-1">{errors.type.message}</p>
          )}
        </div>

        {/* Start Date */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Start Date
          </label>
          <input
            type="date"
            {...register("startDate", { required: "Start date is required" })}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
          {errors.startDate && (
            <p className="text-red-500 text-sm mt-1">
              {errors.startDate.message}
            </p>
          )}
        </div>

        {/* End Date */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            End Date
          </label>
          <input
            type="date"
            {...register("endDate", { required: "End date is required" })}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
          {errors.endDate && (
            <p className="text-red-500 text-sm mt-1">
              {errors.endDate.message}
            </p>
          )}
        </div>

        {/* Reason */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Reason (optional)
          </label>
          <textarea
            {...register("reason")}
            placeholder="Write your reason..."
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
            rows="3"
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default LeaveForm;
