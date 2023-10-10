import React from 'react'

const Post = ({title, body}) => {
  return (
    <div className='text-center p-3 border border-gray-400/3 w-64 bg-red-400'>
        <t4 className="text-white text-3xl">{title}</t4>
        <p className="text-xs">{body}</p>
    </div>
  )
}

export default Post
