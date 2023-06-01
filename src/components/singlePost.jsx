import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FoodNavbar from "./navbar";


const SinglePost = () => {

    
    const [post, setPosts] = useState({})
    let params = useParams()

    useEffect(() => {
        let fetchData = async () => {
            const res = await axios.get(`http://localhost:4000/posts/${params.id}`)
            const data = await res.data
            setPosts(data)
            console.log(post);
        }
        fetchData()
    })

    return ( 
        <div className="singlepost">
            <FoodNavbar/>
            <div className="start text-center my-5 d-flex justify-content-center">
                <div className="image col-5" >
                    <img src={post.image} className="rounded-2" alt="" height="600" width="500" />
                </div>
                <div className="information col-5 text-start">
                    <h1 className="">{post.title}</h1>
                    <div className="line mb-2"></div>
                    <p>{post.summary}</p>
                    <div className="location">
                        <h2> <img width="30" src="/images/location.svg" alt="" /> Location</h2>
                        <div className="line mb-3"></div>
                        <iframe src={post.location}
                            className="my-1 rounded-2"
                            width="600" height="350"></iframe>
                    </div>
                </div>
            </div>
            <div className="linkBtn text-center">
                <Link to='/home/posts' className="btn btn-dark btn-lg rounded-1 mb-2  homeBtn">&lt; Go back to Foods</Link>
            </div>
            </div>
        
);
}
 
export default SinglePost;