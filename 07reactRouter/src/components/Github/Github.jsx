import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    // const [data, setData] = useState({})
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/abhayratnakar')
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img className='' src={data.avatar_url} alt="Git picture" width={300}/>
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch("https://www.instagram.com/__karan___046?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==")
    return response.json()
}