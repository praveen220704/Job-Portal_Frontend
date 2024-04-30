import { useLoaderData } from "react-router-dom";
import jobServices from "../services/jobServices";

export const loader = async () => {
    const jobs = await jobServices.getJobs();

    return { jobs };
}

const Jobs = () => {

    const { jobs } = useLoaderData();

  return (
      <div>
            <h1>Jobs</h1>
            <ul>
                {
                    jobs.data.map((job, index) => (
                        <li key={index}>{job.title}</li>
                    ))
                }
            </ul>
    </div>
  )
}

export default Jobs;