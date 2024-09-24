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

    console.log("userdata sdfsdfds", UserData)

    useEffect(()=>{

        dispatch(displayUser())
      },[]) 
  return (
    <AdminContainer>
<<<<<<< HEAD
    <div className='admin-userlist-container'>
        <h1>user</h1>
         <div className='admin-user-container'>
          {UserData && UserData.map((user)=>( <div key={user._id} className='admin-singleuser'>
          <div className="user-image-profile">
            <img  src={user.profile} alt="" />
          </div>
          <p >{user.name}</p>
          <p >{user.email}</p>
          <p className=''>{user.address}</p>
          <p>{user.contact}</p>
          
          
           </div>
      ))}
      
=======
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
>>>>>>> 6798e5974bc4f84cca621d0b40c4143239581ca5
    </div>

    {/* <div>
      {UserData && UserData.map((item)=>(
        <div> 
           <p>{item?.name}</p>
          
           </div>
      ))}
    </div> */}
      
    </div>
    </AdminContainer>
  )
}

export default Users
