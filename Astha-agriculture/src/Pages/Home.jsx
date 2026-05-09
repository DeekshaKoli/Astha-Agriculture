import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()

  return (


    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-700 to-cyan-500">

      <div className="bg-white p-10 rounded-2xl shadow-2xl w-[320px] text-center">

        <h1 className="text-3xl font-bold text-slate-700 mb-8">
          🌾 ASTHA AGRICULTURE
        </h1>

       <div className="flex flex-col gap-4">

  <button
    onClick={() => navigate('/form')}
    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition"
  >
    Student Registration
  </button>

  <button
    onClick={() => navigate('/login')}
    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg transition"
  >
    Admin Login
  </button>

</div>
      </div>

    </div>
  )
}

export default Home