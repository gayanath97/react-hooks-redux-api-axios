import axios from "axios";

export async function AxiosRequest(url,method,headers,params) {

    return params?axios({
        url:url,
        method:method,
        headers:headers,
        data:params,
        timeout:1000
    }):axios({
        url:url,
        method:method,
        headers:headers,
        data:{},
        timeout:1000
    });
}

const GetApiDetails = ()=>{
    const headers={
       'Content-Type' : 'application/json',
    }
    return AxiosRequest("http://localhost:3000/details","GET",headers,{})
};
const PostApiDetails = (data)=>{
    const headers={
       'Content-Type' : 'application/json',
    }
    return AxiosRequest("http://localhost:3000/details","POST",headers,data)
};
const UpdateApiDetails = (data,id)=>{
    const headers={
       'Content-Type' : 'application/json',
    }
    return AxiosRequest(
        "http://localhost:3000/details/"+id,
        "PUT",
        headers,
        data)
};
const GetDetailsById = (id)=>{
    const headers={
       'Content-Type' : 'application/json',
    }
    return AxiosRequest(
    "http://localhost:3000/details/"+id,
    "GET",
    headers,
    {})
};
const DeleteApiDetails = (id)=>{
    const headers={
       'Content-Type' : 'application/json',
    }
    return AxiosRequest(
        "http://localhost:3000/details/"+id,
        "DELETE",
        headers,
        {})
};
export {GetApiDetails,PostApiDetails,UpdateApiDetails,GetDetailsById,DeleteApiDetails};
