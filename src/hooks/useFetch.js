import React, { useState, useEffect } from 'react'

const useFetch =  (url, id) => {
    const [data, setData] = useState(null)
    const fetchPost = async (id) =>{
        try{
            const response = await fetch(url + id)
            const content = await response.json()
            setData(content)
        } catch (error){
            console.log(error)
        } finally{
            console.log("Done")
        }
     }
          useEffect(() => {
            fetchPost(id)
          }, [id]);

          return{
            data
          }
        }
    

export default useFetch
