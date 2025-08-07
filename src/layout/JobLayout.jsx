import React from 'react'
import { Outlet } from 'react-router-dom'

const JobLayout = () => {
  return (
    <div>
      <h2>Job Openings</h2>
      <p>List of current job opening in our company.</p>
      <Outlet></Outlet>
    </div>
  )
}

export default JobLayout
