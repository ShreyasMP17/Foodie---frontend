import axios from "axios";
import { useEffect, useState } from "react";
import Banner from "./banner";
import { Link } from "react-router-dom";

const Food = () => {
    
    let title ="All Foods"

    let[posts,setPosts]=useState([])

    useEffect(()=>{
        let fetchData = async() =>{
            let res = await axios.get("http://localhost:4000/posts")
            let data = await res.data
            setPosts(data)
        }
        fetchData()
    })
    return ( 
    <div className="posts">
        <div className="ban">
        <Banner data={title}/>
        </div>
        <div className="postList d-flex flex-wrap justify-content-around ">
        {posts.map(data =>(
            <div className="post mb-4" key={data._id}>
            <Link to={`/posts/${data._id}`}><img src={data.image} className="postImage rounded-3 mt-5" width="320" height="360" alt="" /></Link>
            <div className="info mt-3">
                <h2 style={{ fontFamily: "inherit" }}>{data.title}</h2>
                <p className="text-secondary"> {data.author}</p>
                <Link to={`/posts/${data._id}`} className="btn btn-dark rounded-1 homeBtn">Read more &gt;</Link>
            </div>
        </div>
        ))}
        </div>
    </div>
     );
}
 
export default Food;