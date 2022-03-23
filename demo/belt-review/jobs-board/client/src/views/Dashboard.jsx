// grab info from backend - axios
// get info when the page is loaded - useEffect, useState
import React, {useEffect, useState} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const [jobs, setJobs] = useState()

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/jobs`)
      .then(res=>setJobs(res.data))
      .catch(err=>console.log(err))
  },[])

  return (
    <div>
      <Link to="/jobs/new"> Create a new job</Link>
      {
        jobs?
          <table className='table'>
            <thead>
              <tr>
                <th> Title</th>
                <th> Company</th>
                <th> Salary</th>
                <th> Remote?</th>
              </tr>
            </thead>
            <tbody>
              {
                jobs.map((job, i)=>(
                  <tr key={i}>
                    <td> {job.title}</td>
                    <td> {job.company}</td>
                    <td> {job.salary}</td>
                    <td> {job.remote?"Yes":"No"}</td>
                  </tr>
                ))
              }

            </tbody>

          </table>:
        <h1> There is no job available. Please add more jobs</h1>
      }
    </div>
  )
}

export default Dashboard