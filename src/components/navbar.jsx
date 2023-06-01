import { Link } from "react-router-dom";
import "../styles/FoodNavbar.css"

const FoodNavbar = ()=>{
    return(
        <div className="navbar m-2">
            <div className="left d-flex ">
            <img src="/images/lg1.png" className="m-2" height="40" width="60" alt="" />
            <h1 style={{marginRight:"750"}}>FOODIE</h1>
            </div>
            <Link to="/home">Home</Link>
            <Link to="/home/about">About</Link>
            <Link to="/home/posts">Foods</Link>
            <Link to="/home/add-post">Add Foods</Link>
            <Link to="/">Logout</Link>
        </div>
    );
}
export default FoodNavbar;