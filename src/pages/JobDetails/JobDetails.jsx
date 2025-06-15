import { FaMapMarkerAlt } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const {_id,title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
    applicationDeadline, } = useLoaderData();
  console.log("title", title);
  return (
    <div className="card bg-white border-2 m-5 mx-auto items-center text-black w-2xl shadow-sm">
    <div className="flex gap-2 p-2 m-2">
      <figure>
        <img className="w-16" src={company_logo} alt="Shoes" />
      </figure>
      <div>
        <h4>{company}</h4>
        <p className="flex gap-2 items-center">
        <FaMapMarkerAlt />
          {location}
        </p>
      </div>
    </div>
    <div className="card-body">
     <div>
     <h2 className="card-title">
        {title}
        <div className="badge badge-secondary">NEW</div>
      </h2>
      <p>{description}</p>
     </div>
      <div className="flex gap-2 flex-wrap ">
        {requirements.map((skill, index) => (
          <p key={index} className="border rounded-md text-center px-2 hover:text-blue-300 hover:bg-gray-100">
            {skill}
          </p>
        ))}
      </div>
      <div className="">
        <p className="p-4">
          Salary: $ {salaryRange.min} - {salaryRange.max}{" "}
          {salaryRange.currency}
        </p>
          <Link to={`/jobApply/${_id}`}><button className="btn btn-primary">Apply Now</button></Link>
      </div>
    </div>
  </div>
  );
};

export default JobDetails;
