import { useState } from "react";
import { useNavigate } from "react-router";

const DetailPage = () => {
  const [showTips, setShowTips] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-8">
      <h1 className="text-3xl font-bold text-green-700 mb-4 text-center">
        Hidup Sehat
      </h1>

      <img
        src="https://images.unsplash.com/photo-1626451542138-1f86835340ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Hidup Sehat"
        className="rounded-lg shadow mb-4 w-full object-cover"
      />

      <p className="text-gray-700 text-lg mb-4">
        Menjaga kesehatan tubuh dimulai dari kebiasaan kecil seperti olahraga,
        makan sayur, dan tidur cukup.
      </p>

      <button
        onClick={() => setShowTips(!showTips)}
        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition duration-300 mr-2"
      >
        {showTips ? "Sembunyikan Tips" : "Lihat Tips Sehat"}
      </button>

      <button
        onClick={() => navigate("/")}
        className="bg-gray-700 text-white hover:bg-gray-800 font-semibold py-2 px-4 rounded transition duration-300"
      >
        Hitung Ulang
      </button>

      {showTips && (
        <ul className="mt-4 list-disc list-inside text-gray-600">
          <li>Olahraga ringan 30 menit setiap hari</li>
          <li>Konsumsi air putih minimal 8 gelas</li>
          <li>Kurangi makanan cepat saji</li>
          <li>Tidur cukup 7-8 jam per malam</li>
        </ul>
      )}
    </div>
  );
};

export default DetailPage;