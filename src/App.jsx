import { useState, useEffect} from 'react'
import './App.css'
import Post from './components/Post'

function App() {
  const [number, setNumber] = useState(1)
  const [post, setPost] = useState("")

  const fetchPost = async (id) =>{
    try{
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id)
      const data = await response.json()
      setPost(data)
    } catch (error){
      console.log(error)
    } finally{
      console.log("Done")
    }
    
  }

  useEffect(()=>{
    fetchPost(number)
  }, [number])


  
  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/posts/' + number)
  //   .then((response) => response.json())
  //   .then((data)=> setPost(data))
  //    .catch((error) => console.log(error))
  // }, [number])


  return (
      <div className='flex flex-col justify-center items-center align-center h-screen bg-gray w-screen'>
        <Post title={post.title} body={post.body} />
        {number}
        <div className='flex item-center gap-3 mt-3'> 
          {Array.from({length: 5}).map((value, index)=>{
            return (
              <div key={`pagination-${index + 1}`} className='font-bold p-2 border hover: cursor-pointer bg-red-500' onClick={()=> setNumber(index+1)}>
                {index + 1} 
              </div>
            )
          })}
        </div>
        
      </div>
 
  )
}

export default App
