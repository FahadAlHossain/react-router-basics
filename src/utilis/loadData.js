export const jobsLoader = async () => {
  const res = await fetch("http://localhost:5000/jobs");
  if(!res.ok){
    throw Error('Jobs could not found!!')
  }
  return res.json();
};

export const JobDetailsLoader = async ({params})=> {
  const {id} = params;
  const res = await fetch("http://localhost:5000/jobs/" + id);
  if(!res.ok){
    throw Error('Could not found job details')
  }
  return res.json();
}