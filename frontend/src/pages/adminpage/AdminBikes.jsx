import React, { useEffect } from 'react'
import AdminContainer from '../../component/container/AdminContainer'
import { GetBike } from '../../actions/BIkeAction'
import { useDispatch,useSelector } from 'react-redux'
// import AllBikeLIst from '../../component/BikeComponent/AllBikeLIst'
import { AdminBikeDelete } from '../../actions/AdminAction'
import "./adminbike.css"


const AdminBikes = () => {
  const dispatch = useDispatch()

  const {bikes} = useSelector((state)=> state.getBike)

  useEffect(()=>{
    dispatch(GetBike())

  },[])

  const handleEdit = (id)=>{
    console.log("editing",id)

  }
  const handleDelete = (id)=>{
    console.log("deleting",id)
    dispatch(AdminBikeDelete(id))

  }

  return (
    <AdminContainer>
      <div className='admin-cont'>
  <h1>Admin Dashboard | Bike List</h1>

  <table className="bike-list-table">
    <thead>
      <tr>
        <th>Bike Name</th>
        <th>Serial Number</th>
        <th>Description</th>
        <th>Bike Type</th>
        <th>Price</th>
        <th>Picture</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {bikes && bikes.map((bike, index) => (
        <tr key={index}>
          <td>{bike?.name}</td>
          <td>{bike?.serialNumber}</td>
          <td className="description" >{bike?.description}</td>
          <td>{bike?.bikeType}</td>
          <td>${bike?.price}</td>
          <td><img src={bike?.image} alt="Bike" className="bike-image" /></td>
          <td className="actions">
            <button onClick={() => handleEdit(bike?._id)} className="edit-btn">Edit</button>
            <button onClick={() => handleDelete(bike?._id)} className="delete-btn">Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </AdminContainer>
  
  )
}

export default AdminBikes
