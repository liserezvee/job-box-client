import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth();
  console.log(id, user.email);
  const navigate = useNavigate()
  const submitJobApplication = async (e) => {
    e.preventDefault();
    const from = e.target;
    const linkedIn = from.linkedIn.value;
    const github = from.github.value;
    const resume = from.resume.value;
    //console.log(linkedIn, github, resume);

    const jobApplication = {
      job_id: id,
      applicant_email: user?.email,
      linkedIn,
      github,
      resume,
    };
    fetch("http://localhost:3000/job-applications", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(jobApplication),
      })
        .then((res) => res.json())
        .then((data) => {
          if(data.insertedId){
            alert("applied successfully")
            navigate("/myApplications")
          }
        });
  };
  return (
    <div className="hero bg-white text-black flex flex-col card border-2 m-5 mx-auto items-center  w-2xl shadow-sm">
      <div className="mt-5 text-2xl font-bold">
        <h1>Apply Job and Good Luck!</h1>
      </div>
      <form onSubmit={submitJobApplication} className="card-body w-full">
        <div className="fieldset  text-white font-bold">
          <div className="">
            <label className="fieldset-label text-black">LinkedIn URL</label>
            <input
              type="url"
              name="linkedIn"
              className="input w-full"
              placeholder="LinkedIn URL"
              required
            />
          </div>
          <div>
            <label className="fieldset-label text-black">GitHub</label>
            <input
              type="url"
              name="github"
              className="input w-full"
              placeholder="Github URL"
              required
            />
          </div>
          <div>
            <label className="fieldset-label text-black">Resume</label>
            <input
              type="url"
              name="resume"
              className="input w-full"
              placeholder="Resume URL"
              required
            />
          </div>
          <div>
            {" "}
            <button className="btn btn-neutral mt-4 w-full">Apply</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default JobApply;
