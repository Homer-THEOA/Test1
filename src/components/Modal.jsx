import React, { useEffect, useState } from "react";

export default function Modal() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-80 text-center">
        <h2 className="text-lg font-semibold mb-2">Welcome to CTA Timeline</h2>
        <p className="text-sm text-gray-600">Explore our journey from 2011 t
