export const jobsLoader = async () => {
  const res = await fetch("http://localhost:5000/jobs");
  return res.json();
};