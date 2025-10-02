import { useState } from "react";

export default function StudentForm() {
  const [formData, setFormData] = useState({ name: "", email: "", course: "" });
  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.course) return;

    setStudents([...students, formData]);
    setFormData({ name: "", email: "", course: "" });
  };

  return (
    <div className="min-h-screen bg-blue-900 p-6">
      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl p-6 mb-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Student Registration</h2>

        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-1">Course</label>
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your course"
          />
        </div>

        <button type="submit" className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
          Submit
        </button>
      </form>

      {/* Table */}
      {students.length > 0 && (
        <div className="bg-white shadow-md rounded-xl p-6 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Submitted Entries</h3>
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">Course</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="border border-gray-300 px-4 py-2 text-gray-800">{student.name}</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-800">{student.email}</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-800">{student.course}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
