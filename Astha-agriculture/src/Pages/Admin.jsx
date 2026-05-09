import React from 'react';

const Admin = () => {

  // 🔗 Google Sheet Open Function
  const openSheet = () => {
    window.open(
      "https://docs.google.com/spreadsheets/d/15-yTBXllrw0JL6i8f5CPxFEuCWURl26hb8QAus8higA/edit?usp=sharing",
      "_blank"
    );
  };

  // 🚪 Logout Function
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-700 to-cyan-500">

      <div className="bg-white p-10 rounded-2xl shadow-2xl w-[320px] text-center">

        <h1 className="text-3xl font-bold text-slate-700 mb-8">
          📊 Admin Dashboard
        </h1>

        {/* OPEN SHEET BUTTON */}
        <button
          onClick={openSheet}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition mb-4"
        >
          📂 Open Live Google Sheet
        </button>

       

        {/* LOGOUT */}
        <button
          onClick={logout}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg transition"
        >
          🚪 Logout
        </button>

      </div>

    </div>
  );
};

export default Admin;