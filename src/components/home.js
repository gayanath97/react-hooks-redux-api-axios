import { Button } from 'bootstrap';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { GetApiAction,DeleteApiAction } from '../redux/action/action';

const Home = () => {

   const dispatch = useDispatch();
   const responseData = useSelector(state=>state.reducer.details)
   const isDeleteResponse = useSelector(state=>state.reducer.isDeleteResponse)

   console.log("responseData from  action _________ ",responseData)

   if(isDeleteResponse){
    alert("Your data has been deleted!")
    window.location.reload(false)
  }
   
   const result = responseData ?
   
   responseData.map((data,index)=>{
        return(
          <tr key={index}>
          <th scope="row">{data.id}</th>
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>{data.phone}</td>
          <td>{data.country}</td>
          <td>
            <Link to={`/edit/${data.id}`}>
            <span class="material-icons">
                 edit
           </span>
            </Link>
          </td>
          <td>
            
            <span 
            className='material-icons text-danger delete_icon' 
            onClick={()=>{dispatch(DeleteApiAction(data.id))}}
            >
                 delete
            </span>
            
          </td>
        </tr>
        )
   }):null

   useEffect(()=>{
       dispatch(GetApiAction());
   },[dispatch])

   

  return (
    <div>
      <h1>React Redux Crud Operation</h1>
      <Link to='/form'><span class="material-icons">
add ADD NEW
</span></Link>
      <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">NAME</th>
      <th scope="col">EMAIL</th>
      <th scope="col">PHONE</th>
      <th scope="col">COUNTRY</th>
      <th scope="col">EDIT</th>
      <th scope="col">DELETE</th>
    </tr>
  </thead>
        
  <tbody>
    {result}
  </tbody>

</table>
    </div>
  )
}

export default Home