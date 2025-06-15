import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const MyPostedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:3000/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching jobs:", error));
  }, [user.email]);
  return (
    <div className="text-center overflow-x-auto bg-black w-full max-w-6xl border rounded-3xl m-5 mx-auto">
      <h2 className="text-center text-xl sm:text-2xl font-extrabold text-white p-2">
        My posted jobs
      </h2>

      <div className="overflow-x-auto p-2">
        <table className="table w-full min-w-[600px] text-white">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Job Title</th>
              <th>Deadline</th>
              <th>Applications</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={job._id}>
                <td>{index + 1}</td>
                <td className="break-words">{job.title}</td>
                <td>{job.applicationDeadline}</td>
                <td>
                  <Link
                    to={`/viewApplication/${job._id}`}
                    className="btn btn-sm sm:btn-md m-1"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobs;
