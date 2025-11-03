import React, { createContext, useState, useEffect } from "react";

// Context yaratamiz
export const LeaveContext = createContext();

export const LeaveProvider = ({ children }) => {
  const [leaves, setLeaves] = useState([]);

  // localStorage'dan malumotlarni olish
  useEffect(() => {
    const storedLeaves = JSON.parse(localStorage.getItem("leaves")) || [];
    setLeaves(storedLeaves);
  }, []);

  // localStorage'ga saqlash
  useEffect(() => {
    localStorage.setItem("leaves", JSON.stringify(leaves));
  }, [leaves]);

  // yangi leave qo‘shish
  const addLeave = (newLeave) => {
    setLeaves((prev) => [...prev, newLeave]);
  };

  // leave o‘chirish
  const deleteLeave = (id) => {
    setLeaves((prev) => prev.filter((leave) => leave.id !== id));
  };

  return (
    <LeaveContext.Provider value={{ leaves, addLeave, deleteLeave }}>
      {children}
    </LeaveContext.Provider>
  );
};
