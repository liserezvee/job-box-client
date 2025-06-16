import React from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AddJob = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const handleAddJob = (e) => {
    e.preventDefault();
    const fromData = new FormData(e.target);
    const initialData = Object.fromEntries(fromData.entries());
    console.log(initialData);
    const { min, max, currency, ...newJob } = initialData;
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");
    console.log(newJob);

    axiosSecure.post("/jobs", newJob).then((res) => {
      console.log(res.data);
      if (res.data.acknowledged) {
        alert("Job Posted Successfully");
        e.target.reset();
        navigate("/myPostedJobs");
      }
    });
  };
  return (
    <div className="text-gray-800 max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg mb-2 mt-2">
      <h2 className="text-3xl font-bold mb-6">Post a Job</h2>
      <form onSubmit={handleAddJob} className="space-y-6">
        {/* Job title */}
        <div>
          <label className="block text-sm font-medium mb-1">Job Title</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="title"
            placeholder="Job Title"
          />
        </div>
        {/* Job Location */}
        <div>
          <label className="block text-sm font-medium mb-1">Job Location</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="location"
            placeholder="Job Location"
          />
        </div>
        <div className="flex gap-2 justify-between w-full">
          {/* Job Type */}
          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1">Job Type</label>
            <select
              name="job_type"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Pick A Job Type</option>
              <option>Full-time</option>
              <option>Intern</option>
              <option>Part-time</option>
            </select>
          </div>
          {/* Job Field */}
          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1">Job Field</label>
            <select
              name="field"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Pick A Job Field</option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>IT</option>
              <option>Teaching</option>
            </select>
          </div>
        </div>

        {/* Salary Range */}
        <div>
          <label className="block text-sm font-medium mb-2">Salary Range</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="min"
              placeholder="Min"
            />
            <input
              type="text"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="max"
              placeholder="Max"
            />
            <select
              name="currency"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Currency</option>
              <option>BDT</option>
              <option>USD</option>
              <option>EUR</option>
            </select>
          </div>
        </div>
        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Job Description
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg px-4 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="description"
            required
            placeholder="Description"
          ></textarea>
        </div>
        {/* Company Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Company Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="company"
            placeholder="Company Name"
          />
        </div>
        {/* Requirements */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Job Requirements
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg px-4 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="requirements"
            required
            placeholder="Put each requirement on a new line"
          ></textarea>
        </div>
        {/* Responsibilities */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Job Responsibilities
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg px-4 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="responsibilities"
            required
            placeholder="Put each responsibility on a new line"
          ></textarea>
        </div>
        {/* HR Name */}
        <div>
          <label className="block text-sm font-medium mb-1">HR Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="hr_name"
            placeholder="HR Name"
          />
        </div>
        {/* HR Email */}
        <div>
          <label className="block text-sm font-medium mb-1">HR Email</label>
          <input
            type="email"
            defaultValue={user?.email}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="hr_email"
            placeholder="HR Email"
          />
        </div>
        {/* Deadline */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Application Deadline
          </label>
          <input
            type="date"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="applicationDeadline"
          />
        </div>
        {/* Logo URL */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Company Logo URL
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="company_logo"
            placeholder="https://example.com/logo.png"
          />
        </div>
        {/* Submit */}
        <div className="pt-4 text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white w-3xl px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200 cursor-pointer"
          >
            Submit Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
