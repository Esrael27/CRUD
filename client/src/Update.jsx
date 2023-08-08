import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

const Update = () => {
  
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()
  const {id} = useParams()

    const Navigate = useNavigate()
 
  useEffect(() =>  {
    axios.get('http://localhost:1621/getUser/'+id)
    .then((response) =>   
    {
       setName(response.data.name)
       setEmail(response.data.email)
       setAge(response.data.age)

    } ).catch((error) => console.log(error))
 }, [])
    
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('http://localhost:1621/update/'+id, {name,email,age})
    .then((response) => {
       Navigate('/')
      console.log(response)
    })
    .catch((err) => console.log(err))
  }
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
    <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
            <h2>Update User</h2>
            <div className="mb-2">
             <label htmlFor="">Name</label>
             <input type=""
              placeholder="Enter Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)} 
             />
            </div>
            <div className="mb-2">
             <label htmlFor="">Email</label>
             <input type="email"
              placeholder="Enter Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
               />
            </div>
            <div className="mb-2">
             <label htmlFor="">Age</label>
             <input type="number"
              placeholder="Enter Age"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
               />
            </div>
            <Link to="/"> <button className="btn btn-primary">Back</button></Link>
            <button className="btn btn-success">Update</button>
        </form>
    </div>
</div>
  )
}

export default Update