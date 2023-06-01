import axios from "axios";
import { useEffect, useState } from "react";
import Banner from "./banner";

const About = () => {
    const title = "About Us"
    

    let[food,setFoods]=useState([])

    useEffect(()=>{
        let fetchData = async() =>{
            let res = await axios.get("http://localhost:4000/posts")
            let data = await res.data
            setFoods(data)
        }
        fetchData()
    })
    let[cust,setCust]=useState([])

    useEffect(()=>{
        let fetchData = async() =>{
            let res = await axios.get("http://localhost:4000/users")
            let data = await res.data
            setFoods(data)
        }
        fetchData()
    })

    

    
    return ( 
        <div className="about">
            <Banner data={title} />
            <div className="aboutFood my-4 d-flex justify-content-center">
                <div className="image">
                    <img className="rounded-2" width="550" height="600" src="/images/2.webp" alt="" />
                </div>
                <div className="info w-50 p-5">
                    <h2 className="fw-bolder fs-1">About Foodie</h2>
                    <div className="text my-3"></div>
                    <p>Far far away, behind the word mountains, far from the countries <br /> Vokalia and Consonantia</p>
                    <div className="blocks d-flex flex-wrap justify-content-between">
                        
                            <div className="content bg-light p-5  text-center" style={{width:"50%"}} >
                                <h1 className="">10</h1>
                                <p className="text-secondary">Yours of exprence</p>
                            </div>
                       
                        <div className="content bg-light p-5  text-center" style={{width:"50%"}}>
                                <h1 className="">{food.length}</h1>
                                <p> Foods</p> 
                            </div>
                            <div className="content bg-light p-5  text-center" style={{width:"50%"}} >
                                <h1 className="">300</h1>
                                <p className="text-secondary">Lifestyle</p>
                            </div>
                            <div className="content bg-light p-5  text-center" style={{width:"50%"}} >
                                <h1 className="">40</h1>
                                <p className="text-secondary">Happy Customer</p>
                            </div>
                            
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default About;