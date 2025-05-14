// inputHal.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function InputHal() {
  const [berat, setBerat] = useState("");
  const [tinggi, setTinggi] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!berat || !tinggi) {
      alert("Mohon isi berat dan tinggi badan.");
      return;
    }
    navigate("/output", {
      state: {
        berat: parseFloat(berat),
        tinggi: parseFloat(tinggi),
      },
    });
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">BMI Calculator</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Berat Badan (kg):</label>
          <input
            type="number"
            value={berat}
            onChange={(e) => setBerat(e.target.value)}
            className="w-full border border-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Tinggi Badan (cm):</label>
          <input
            type="number"
            value={tinggi}
            onChange={(e) => setTinggi(e.target.value)}
            className="w-full border border-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Hitung BMI
        </button>
      </form>
    </div>
  );
}

export default InputHal;