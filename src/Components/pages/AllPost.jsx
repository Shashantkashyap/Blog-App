import React, { useEffect, useState } from 'react'
import appwriteService from "../../appWrite/config"
import  { Container, PostCard } from '../../Components'


function AllPost() {
    const [posts, setPosts] = useState([])
    useEffect(()=>{},[])

    appwriteService.getPost([]).then((posts)=>{
        if(posts){
            setPosts(posts.documents)
        }
    })
  return (
    <div className=' w-full py-8'>
        <Container>
            <div className=' flex flex-wrap'>
                {
                    posts.map((post)=>(
                        <div key={post.$id} className=' py-2 w-1/4'>
                            <PostCard post = {post}></PostCard>
                        </div>
                    ))
                }
            </div>
        </Container>
      
    </div>
  )
}

export default AllPost
