import React, { useState } from 'react'
import logo from '../assets/logo.jpeg'

const Form = () => {

  const [fileName, setFileName] = useState('')

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) setFileName(file.name)
  }

  // 🔥 SUBMIT FUNCTION (NEW ADD)
  const handleSubmit = async (e) => {
    e.preventDefault()

    const form = e.target

    // course (radio single select)
    const course = form.querySelector('input[name="course"]:checked')?.value || ""

    const data = {
      course,

      name: form.name.value,
      father: form.father.value,
      address: form.address.value,
      dob: form.dob.value,
      category: form.category.value,
      mobile: form.mobile.value,
      whatsapp: form.whatsapp.value,
      email: form.email.value,
      occupation: form.occupation.value,
      fees: form.fees.value,
      referenceBy: form.referenceBy.value,

      tenthBoard: form.tenthBoard.value,
      tenthYear: form.tenthYear.value,
      tenthMarks: form.tenthMarks.value,

      twelfthBoard: form.twelfthBoard.value,
      twelfthYear: form.twelfthYear.value,
      twelfthMarks: form.twelfthMarks.value
    }

    try {

      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbyIYGmOmEG74_Pz55LYPGhAWE7gu9tJUXvyXxu4CxHdCu0C5wQXQ2McvEGv0OHrQj1f7w/exec",
        {
          method: "POST",
          body: JSON.stringify(data)
        }
      )

      const result = await res.json()

      alert(result.message || "Submitted Successfully")

      form.reset()
      setFileName("")

    } catch (err) {
      console.log(err)
      alert("Server Error")
    }
  }

  return (

    <div className="min-h-screen bg-gray-200 py-10 px-4">

      <div className="max-w-5xl mx-auto bg-yellow border-2 border-black p-5 rounded-lg shadow-lg">

        {/* HEADER (same) */}
        <div className="bg-white rounded-2xl shadow-lg border p-5 space-y-4">

  {/* TOP ROW */}
  <div className="flex flex-col md:flex-row items-center justify-between gap-6">

    {/* LOGO */}
    <div className="w-24 h-24 md:w-28 md:h-28 border-2 border-gray-300 rounded-xl overflow-hidden flex items-center justify-center bg-gray-50 shadow-sm">
      <img
        src={logo}
        alt="logo"
        className="w-full h-full object-contain p-2"
      />
    </div>

    {/* TITLE */}
    <div className="text-center flex-1">
      <h1 className="text-2xl md:text-4xl font-extrabold text-red-600 tracking-wide">
        🌾 ASTHA AGRICULTURE ACADEMY
      </h1>

      <p className="text-gray-600 mt-2 text-sm md:text-base">
        📍 पता : सिविल अस्पताल के पीछे, मुख्य रोड, मध्य प्रदेश
      </p>
    </div>

    {/* PHOTO UPLOAD */}
    <div className="w-32 h-40 border-2 border-dashed border-gray-400 rounded-xl overflow-hidden bg-gray-50 shadow-sm hover:border-slate-500 transition">

      <label
        htmlFor="photo"
        className="w-full h-full flex flex-col items-center justify-center text-sm text-gray-500 cursor-pointer hover:bg-gray-100"
      >
        📸 Upload Photo
        <span className="text-xs mt-1">Click to select</span>
      </label>

      <input
        type="file"
        id="photo"
        hidden
        onChange={handleFileChange}
      />

    </div>

  </div>

  {/* FILE NAME */}
  {fileName && (
    <p className="text-center text-sm text-gray-600 bg-gray-100 py-2 rounded-lg">
      📎 Selected File: <span className="font-medium">{fileName}</span>
    </p>
  )}

  {/* FORM TITLE */}
  <h2 className="text-center text-xl md:text-2xl font-bold text-slate-700 border-t pt-4">
    📝 STUDENT REGISTRATION FORM
  </h2>

</div>

        {/* FORM START */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-5">

          {/* COURSES (FIXED RADIO SINGLE SELECT) */}
          <div className="bg-green-700 text-white p-4 rounded-lg flex flex-wrap gap-5">

            <label><input type="radio" name="course" value="B.SC" /> Agriculture B.sc</label>
            <label><input type="radio" name="course" value="M.SC" /> Nursing Bsc</label>
            <label><input type="radio" name="course" value="B.PHARMA" /> B-Pharma</label>
            <label><input type="radio" name="course" value="D.PHARMA" /> D.Pharma</label>
            <label><input type="radio" name="course" value="B.TECH" /> B.TECH</label>

          </div>

          {/* INPUTS (same UI, only added name attribute) */}

          <div className="bg-white rounded-xl shadow-md p-5 border border-gray-200 space-y-4">

  {/* NAME */}
  <input
    name="name"
    placeholder="👤 Full Name"
    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 transition"
  />

  {/* FATHER + ADDRESS */}
  <div className="grid md:grid-cols-2 gap-4">

    <input
      name="father"
      placeholder="👨 Father Name"
      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400"
    />

    <input
      name="address"
      placeholder="🏠 Address"
      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400"
    />

  </div>

  {/* DOB + CATEGORY */}
  <div className="grid md:grid-cols-2 gap-4">

    <input
      name="dob"
      type="date"
      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400"
    />

    <select
      name="category"
      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400"
    >
      <option>Category Select</option>
      <option>GEN</option>
      <option>OBC</option>
      <option>SC</option>
      <option>ST</option>
    </select>

  </div>

  {/* CONTACT */}
  <div className="grid md:grid-cols-2 gap-4">

    <input
      name="mobile"
      placeholder="📱 Mobile Number"
      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400"
    />

    <input
      name="whatsapp"
      placeholder="💬 WhatsApp Number"
      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400"
    />

  </div>

  {/* EMAIL */}
  <input
    name="email"
    placeholder="📧 Email Address"
    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400"
  />

  {/* OCCUPATION + FEES */}
  <div className="grid md:grid-cols-2 gap-4">

    <input
      name="occupation"
      placeholder="👨‍💼 Father's Occupation"
      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400"
    />

    <input
      name="fees"
      placeholder="💰 Fees"
      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400"
    />

  </div>

  {/* REFERENCE */}
  <input
    name="referenceBy"
    placeholder="🔖 Reference By (Optional)"
    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400"
  />

</div>

          {/* EDUCATION (same UI, just name added) */}
         <div className="mt-6 overflow-x-auto rounded-xl shadow-md border border-gray-200">

  <table className="w-full text-sm md:text-base">

    {/* HEADER */}
    <thead className="bg-gradient-to-r from-slate-700 to-slate-900 text-white">
      <tr>
        <th className="p-3 text-left">Exam</th>
        <th className="p-3 text-left">University / Board</th>
        <th className="p-3 text-left">Year</th>
        <th className="p-3 text-left">Marks / %</th>
      </tr>
    </thead>

    {/* BODY */}
    <tbody className="bg-white">

      {/* 10th */}
      <tr className="border-b hover:bg-gray-50 transition">
        <td className="p-3 font-semibold text-gray-700">10th</td>

        <td className="p-2">
          <input
            name="tenthBoard"
            placeholder="Enter Board / School"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400"
          />
        </td>

        <td className="p-2">
          <input
            name="tenthYear"
            placeholder="Passing Year"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400"
          />
        </td>

        <td className="p-2">
          <input
            name="tenthMarks"
            placeholder="Marks / %"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400"
          />
        </td>
      </tr>

      {/* 12th */}
      <tr className="border-b hover:bg-gray-50 transition">
        <td className="p-3 font-semibold text-gray-700">12th</td>

        <td className="p-2">
          <input
            name="twelfthBoard"
            placeholder="Enter Board / College"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400"
          />
        </td>

        <td className="p-2">
          <input
            name="twelfthYear"
            placeholder="Passing Year"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400"
          />
        </td>

        <td className="p-2">
          <input
            name="twelfthMarks"
            placeholder="Marks / %"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400"
          />
        </td>
      </tr>

    </tbody>

  </table>

</div>

          {/* DOCUMENTS (UNCHANGED UI) */}
          <div className="grid md:grid-cols-2 gap-5">

            <div className="border p-4">
              <input type="checkbox" /> Aadhaar
              <input type="file" className="w-full mt-2" />
            </div>

            <div className="border p-4">
              <input type="checkbox" /> Photo
              <input type="file" className="w-full mt-2" />
            </div>

            <div className="border p-4">
              <input type="checkbox" /> Marksheet
              <input type="file" className="w-full mt-2" />
            </div>

            <div className="border p-4">
              <input type="checkbox" /> TC
              <input type="file" className="w-full mt-2" />
            </div>

          </div>

          {/* SUBMIT */}
          <button className="w-full bg-slate-700 text-white py-3">
            Submit Form
          </button>

        </form>

      </div>
    </div>
  )
}

export default Form