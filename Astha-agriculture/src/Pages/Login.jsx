import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash, FaUserShield } from 'react-icons/fa'

const Login = () => {

  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState('')

  const handleLogin = (e) => {

    e.preventDefault()

    if(username === 'admin' && password === 'admin123'){

      localStorage.setItem('admin', 'true')

      navigate('/admin')

    }else{

      setError('Invalid Username or Password')
    }
  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-700 to-cyan-500 px-4">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8">

        {/* ICON */}

        <div className="flex justify-center mb-5">

          <div className="bg-slate-700 text-white p-5 rounded-full text-3xl shadow-lg">

            <FaUserShield />

          </div>

        </div>

        {/* TITLE */}

        <h1 className="text-3xl font-bold text-center text-slate-700">
          Admin Login
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Welcome Back 👋
        </p>

        {/* FORM */}

        <form onSubmit={handleLogin} className="space-y-5">

          {/* USERNAME */}

          <div>

            <label className="font-semibold text-gray-700">
              Username
            </label>

            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
              className="w-full mt-2 border border-gray-300 rounded-xl p-3 outline-none focus:border-cyan-500"
            />

          </div>

          {/* PASSWORD */}

          <div>

            <label className="font-semibold text-gray-700">
              Password
            </label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="w-full mt-2 border border-gray-300 rounded-xl p-3 outline-none focus:border-cyan-500"
              />

              <button
                type="button"
                onClick={()=>setShowPassword(!showPassword)}
                className="absolute right-4 top-6 text-gray-500"
              >

                {
                  showPassword
                  ?
                  <FaEyeSlash />
                  :
                  <FaEye />
                }

              </button>

            </div>

          </div>

          {/* ERROR */}

          {
            error &&
            <p className="text-red-500 text-sm">
              {error}
            </p>
          }

          {/* BUTTON */}

          <button
            type="submit"
            className="w-full bg-slate-700 hover:bg-slate-800 text-white py-3 rounded-xl text-lg font-semibold transition duration-300"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  )
}

export default Login

// https://drive.google.com/drive/folders/1CzzmhmUp10uY_Y3hfkxQnbua1axBVULH?usp=sharing

// deploye -url  https://script.google.com/macros/s/AKfycbyIYGmOmEG74_Pz55LYPGhAWE7gu9tJUXvyXxu4CxHdCu0C5wQXQ2McvEGv0OHrQj1f7w/exec