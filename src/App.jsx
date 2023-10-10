import { useState, useEffect} from 'react'
import './App.css'
import Post from './components/Post'
import useFetch from './hooks/useFetch'

function App() {
  const [number, setNumber] = useState(1)
  const {data} = useFetch('https://jsonplaceholder.typicode.com/posts/', number)


  useEffect(()=>{
    console.log('mounter')

    return()=>{
      console.log('Remove')
    }
  }, [])

  return (
      <div className='flex flex-col justify-center items-center align-center h-screen bg-gray w-screen'>
        {data && <Post title={data.title} body={data.body} />}
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
