import React from 'react'
import  { useEffect } from 'react'
import { displayUser } from '../../actions/UserAction'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AdminContainer from '../../component/container/AdminContainer'
import "./auser.css"

const Users = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {UserData, loading, error} = useSelector((state)=> state.displayuser)

    useEffect(()=>{

        dispatch(displayUser())
      },[])
  return (
    <AdminContainer>
    <div className='umain'>
        <h1>user</h1>
        <div className='admin-user-container'>
    <table className="admin-user-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Contact No</th>
        </tr>
      </thead>
      <tbody>
        {UserData && UserData.map((user) => (
          <tr key={user._id} className='admin-singleuser'>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address}</td>
            <td>{user.contact}</td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
      
    </div>
    </AdminContainer>
  )
}

export default Users
