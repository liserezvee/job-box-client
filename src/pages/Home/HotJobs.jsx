import React, { useEffect, useState } from "react";
import { data } from "react-router-dom";
import HotJobsCard from "./HotJobsCard";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3">
        {jobs.map((job) => (
          <HotJobsCard job={job} key={job._id} />
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
