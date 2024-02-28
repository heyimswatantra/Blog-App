import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";
import { getAllPosts } from '../store/postSlice';
import { useDispatch, useSelector } from 'react-redux';


function AllPosts() {
    const [posts, setPosts] = useState([])
    const dispatch = useDispatch()
    const storePosts = useSelector((state) => state.posts.posts);
    // console.log(storePosts);

    useEffect(() => {
        if (storePosts) {
            setPosts(storePosts)
        } else {
            appwriteService.getAllPosts([]).then((posts) => {
                if (posts) {
                    setPosts(posts.documents)
                    dispatch(getAllPosts(posts))
                }
            })
        }
    }, [])

    if(posts.length === 0) return (
        <h1>No posts to show</h1>
    )

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
                </Container>
        </div>
    )
}

export default AllPosts
