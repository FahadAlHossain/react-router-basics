import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const JobDetails = () => {
  const back = useNavigate();
  const jobDetails = useLoaderData();
  return (
    <div className="job-details">
      <p>
        <b>Job Title: </b>
        {jobDetails.title}
      </p>
      <p>
        <b>Salary: </b>
        {jobDetails.salary}
      </p>
      <p>
        <b>Location: </b>
        {jobDetails.location}
      </p>
      <p>
        <b>Description: </b>
        {jobDetails.description}
      </p>
      <button>Apply Now</button>
      <button onClick={() => back("/jobs")}>Go Back</button>
    </div>
  );
};

export default JobDetails;
