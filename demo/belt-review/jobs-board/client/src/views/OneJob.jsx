// destructure params
// useEffect, axios, useState, grab info from backend

import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams, Link } from 'react-router-dom'

const OneJob = () => {
  const {id} = useParams()
  const [job, setJob] = useState()

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/jobs/${id}`)
      .then(res=>setJob(res.data))
      .catch(err=>setJob())
  },[])

  return (
    <>
      {
        job?
          <div>
            <h5> Title: {job.title}</h5>
            <h5> Company: {job.company}</h5>
            <h5> Salary: {job.salary}</h5>
            <h5> Remarks: {job.remote?"This is a remote job":""}</h5>
          </div>:
          <h1> Please make sure the ID is correct. </h1>
      }
      <Link to="/"> Back</Link>
    </>
  )
}

export default OneJob