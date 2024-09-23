import React, { useState } from 'react'
import AdminContainer from '../../component/container/AdminContainer'
import { adminAddBikes } from '../../actions/AdminAction'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import "./addbike.css"

const AddBike = () => {

  const [name, setname] = useState("")
  const [serialNumber, setserialNumber] = useState("")
  const [description, setdescription] = useState("")
  const [bikeType,setbikeType] = useState("")
  const [price, setprice] = useState("")
  const [image,setimage] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {bikedata, loading, error} =useSelector((state)=>state.addBike)


  const handleAddBikeItem = async(e)=>{
    e.preventDefault()
    await dispatch(adminAddBikes(name, serialNumber,description,bikeType,price,image))

    if(bikedata){
      alert("item added")

      setname("")
      setserialNumber("")
      setdescription('')
      setbikeType("")
      setimage("")
      setprice("")
    }
  }

  
  return (
    <AdminContainer>
    <div className='admin-cont'>
        <h2>add Bike</h2>

        <form className='admin-food-form'  onSubmit={handleAddBikeItem}>
      <div>
      <label htmlFor="title">title</label> <br />
      <input type="text" name="title" id="title" value={name} onChange={(e)=>setname(e.target.value)} />
      </div>
      <div>
      <label htmlFor="serialNumber">serialNumber</label><br />
      <input type="text" name="serialNumber" id="serialNumber" value={serialNumber} onChange={(e)=>setserialNumber(e.target.value)} />
      </div>
      <div>
      <label htmlFor="description">description</label><br />
      <input type="text" name="description" id="description" value={description} onChange={(e)=>setdescription(e.target.value)} />
      </div>
      <div>
      <label htmlFor="price">price</label> <br />
      <input type="number" name="price" id="price" value={price} onChange={(e)=>setprice(e.target.value)} />
      
      </div>
     
      <div>
      <label htmlFor="biketype">bike type: </label> <br />
      <input type="text" name="biketype" id="biketype" value={bikeType} onChange={(e)=>setbikeType(e.target.value)} />
      {/* <select
        name="category"
        id="category"
        value={categorys}
        onChange={(e) => setcategory(e.target.value)}
      >
         <option value="" disabled>Select a category</option>
        {category && category.map((cat) => (
          <option key={cat?._id} value={cat?.name}>
            {cat?.name}
          </option>
        ))}
      </select> */}
      
      </div>
      <div>
      <label htmlFor="image">image</label><br />
      <input type="file" name="image" id="image"   onChange={(e)=> setimage(e.target.files[0])} />
      </div>
      <button type="submit">add fooditem</button>
     </form>

     <div className="error-loading">
      {error && <p>{error}</p>}
      {loading && <p>loading... </p>}
     </div>
      
    </div>
    </AdminContainer>
  )
}

export default AddBike
