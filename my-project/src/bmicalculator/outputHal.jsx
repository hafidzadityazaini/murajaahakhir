// outputHal.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function OutputHal() {
  const location = useLocation();
  const navigate = useNavigate();

  if (!location.state) {
    navigate("/");
    return null;
  }

  const { berat, tinggi } = location.state;
  const tinggiMeter = tinggi / 100;
  const bmi = (berat / (tinggiMeter * tinggiMeter)).toFixed(2);

  let kategori = "";
  if (bmi < 18.5) {
    kategori = "Kurus";
  } else if (bmi >= 18.5 && bmi < 25) {
    kategori = "Normal/Ideal";
  } else if (bmi >= 25 && bmi < 30) {
    kategori = "Gemuk";
  } else {
    kategori = "Obesitas";
  }

  return (
    <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-600">Hasil BMI Anda</h2>
      <div className="space-y-2 text-lg">
        <p><strong>Berat Badan:</strong> {berat} kg</p>
        <p><strong>Tinggi Badan:</strong> {tinggi} cm</p>
        <p><strong>BMI:</strong> {bmi}</p>
        <p><strong>Kategori:</strong> <span className="font-semibold text-blue-600">{kategori}</span></p>
      </div>

      <div className="mt-6 space-y-4">
        <button
          onClick={() => navigate("/")}
          className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-700 transition"
        >
          Hitung Ulang
        </button>

        <button
          onClick={() => navigate("/detail")}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          Info Hidup Sehat
        </button>
      </div>
    </div>
  );
}

export default OutputHal;