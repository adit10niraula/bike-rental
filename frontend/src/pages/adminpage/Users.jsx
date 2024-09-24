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
