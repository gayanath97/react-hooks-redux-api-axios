import { useEffect, useState } from "react";
import { GetDetailsById } from "../api/axiosRequest";

export default(props)=>{

    const [detailById,setDetailById]=useState({})

    const GetDetailsByHooks = (requestId) =>{

        console.log("requestId is ______",requestId);
        
            return GetDetailsById(requestId)
                      .then((res)=>{
                        console.log('Response Data is _____',res);
                        setDetailById(res)
                      });         
        };

 useEffect(()=>{
     GetDetailsByHooks(props)
 },[])
return [detailById];
}

