import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const HotJobsCard = ({ job }) => {
  const {
    _id,
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
    applicationDeadline,
  } = job;
  return (
    <div className="card bg-white text-black w-full shadow-sm">
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
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <div className="flex gap-2 flex-wrap ">
          {requirements.map((skill, index) => (
            <p key={index} className="border rounded-md text-center px-2 hover:text-blue-300 hover:bg-gray-100">
              {skill}
            </p>
          ))}
        </div>
        <div className="card-actions justify-end">
          <p>
            Salary: $ {salaryRange.min} - {salaryRange.max}{" "}
            {salaryRange.currency}
          </p>
          <Link to={`/jobs/${_id}`}>
            <button className="btn btn-primary w-full">Apply Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobsCard;
