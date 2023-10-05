import { useState } from 'react'

import './App.css'
import Post from './components/Post'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='flex flex-col justify-center items-center align-center h-screen bg-gray w-screen'>
        <Post />
        <div className='flex item-center gap-3 mt-3'> 
          {Array.from({length: 5}).map((value, index)=>{
            return (
              <div className='font-bold p-2 border hover: cursor-pointer'>
                {index + 1} 
              </div>
            )
          })}
        </div>
        
      </div>
 
  )
}

export default App
