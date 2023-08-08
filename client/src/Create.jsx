import { useState } from "react";
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

const Create = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()

  const navigate = useNavigate()
    const handleSubmit = (e) => {
     e.preventDefault();

      axios.post("http://localhost:1621/create/",{name,email,age})
      .then((response) => {
        console.log(response)
        navigate('/')
      })
      .catch((error) => console.log(error))
     }
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
            <form onSubmit={handleSubmit}>
                <h2>Add User</h2>
                <div className="mb-2">
                 <label htmlFor="">Name</label>
                 <input type=""
                  placeholder="Enter Name"
                  className="form-control"
                  required
                  onChange={(e) => setName(e.target.value)}
                   />
                </div>
                <div className="mb-2">
                 <label htmlFor="">Email</label>
                 <input type="email"
                   placeholder="Enter Email"
                  className="form-control" 
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                 <label htmlFor="">Age</label>
                 <input type="number"
                  required
                  placeholder="Enter Age"
                  className="form-control"
                  onChange={(e) => setAge(e.target.value)}
                   />
                </div>
                <Link to="/"> <button className="btn btn-primary">Back</button></Link>
                <button className="btn btn-success">Submit</button>
                 
            </form>
        </div>
    </div>
  )
}

export default Create