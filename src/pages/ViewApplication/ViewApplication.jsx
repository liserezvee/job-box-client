import React from "react";
import { useLoaderData } from "react-router-dom";

const ViewApplication = () => {
  const applications = useLoaderData();
  console.log("Applications:", applications);
  const handleStatusUpdate = (e, id) => {
    e.preventDefault();
    console.log("Status Updated:", e.target.value, id);
    const data = {
      status: e.target.value,
    };
    fetch(`http://localhost:3000/job-applications/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="overflow-x-auto bg-black w-full max-w-6xl border rounded-3xl m-5 mx-auto">
      <h2 className="text-center text-xl sm:text-2xl text-white m-4">
        Applications for this job
      </h2>

      <div className="overflow-x-auto m-5">
        <table className="table w-full min-w-[600px] text-white">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Status</th>
              <th>Update Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={app._id}>
                <td>{index + 1}</td>
                <td className="break-all">{app.applicant_email}</td>
                <td>{app.status || "N/A"}</td>
                <td>
                  <select
                    onChange={(e) => handleStatusUpdate(e, app._id)}
                    defaultValue={app.status || "Change Status"}
                    className="select select-xs w-full max-w-xs"
                  >
                    <option disabled>Change Status</option>
                    <option>Under Review</option>
                    <option>Set Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplication;
