import { useState, useEffect } from 'react'

export function usePostTitle() {
  const [post, setPost] = useState({})

  async function getPost() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const json = await res.json()
    setPost(json)
  }
  
  useEffect(() => {
    getPost();
  }, [])

  return {post} 
}


