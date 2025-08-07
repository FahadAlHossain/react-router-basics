export const jobsLoader = async () => {
  const res = await fetch("http://localhost:5000/jobs");
  return res.json();
};

export const JobDetailsLoader = async ({params})=> {
  const {id} = params;
  const res = await fetch("http://localhost:5000/jobs/" + id);
  return res.json();
}