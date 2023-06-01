import Banner from "./banner";
import "../styles/addPost.css"
import { useState } from "react";
import axios from "axios";

const AddPost = () => {


    let[author,setAuthor]=useState("")
    let[title,setTitle]=useState("")
    let[summary,setSummary]=useState("")
    let[image,setImage]=useState("")
    let[location,setLocation]=useState("")

    let handleSubmit=(e)=>{
        e.preventDefault()
        let data ={author,title,summary,image,location}
        if (author && title && image && summary && location) {
            axios.post("http://localhost:4000/add-post",data)
            .then((res) =>{
                alert(res.data.message)
            }).catch(err=>{
                alert(err.data.message)
            })
        } else {
            alert("Please fill all the fields")
        }
    }

    let content = "Add a Food"
    return ( 
        <div className="addpost ">
            <Banner className="text-big" data={content}/>
            <div className="new p-5 d-flex justify-align-center">
                <img className="rounded-2" src="/images/20.webp" alt="" height="720" width="700"/>
                <div className="new1 ">
                    <h1>Add Food</h1>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="author">
                            <label htmlFor="">Author</label> <br />
                            <input className="form-control " type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} name="author"/>
                        </div>
                        <div className="Title ">
                            <label htmlFor="">title</label> <br />
                            <input className="form-control " type="text" placeholder="title of the post" value={title} onChange={(e) => setTitle(e.target.value)} name="title"/>
                        </div>
                        <div className="author">
                            <label htmlFor="">Summary</label> <br />
                            <input name="summary"  placeholder="Summmary" value={summary} onChange={(e) => setSummary(e.target.value)} ></input>
                        </div>
                        <div className="image">
                            <label htmlFor="">Image</label> <br />
                            <input className="form-control " type="text"  placeholder="image" value={image} onChange={(e) => setImage(e.target.value)} name="image"/>
                        </div>
                        <div className="location">
                            <label htmlFor="">Location</label> <br />
                            <input className="form-control " type="text" placeholder="location" value={location} onChange={(e) => setLocation(e.target.value)} name="location"/>
                        </div>
                        <button className="btn btn-warning">Submit Post</button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default AddPost;