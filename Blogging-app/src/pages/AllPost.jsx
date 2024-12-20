import React, {useState, useEffect} from 'react'
import appwriteService from "../appwrite/authconfing"
import { Container, PostCard } from '../components'

function AllPost() {
    const [posts, setPosts] = useState([])
    useEffect(()=>{}, [])
    appwriteService.getPost([]).then((posts)=> {
        if(posts){
            setPost(posts.documents)
        }
    })

  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
            {posts.map((posts)=> (
                <div key={posts.id} className='p-2 w-1/4'>
                    <PostCard post={posts} />
                </div>
            ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPost
