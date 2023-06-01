
import { Route, Routes } from "react-router-dom";
import About from "./about";
import AddPost from "./addPost";
import Food from "./food";
import Home from "./FoodieHome";
import FoodNavbar from "./navbar";
import SinglePost from "./singlePost";

const HomePortal = () => {
    return ( 
        <div className="homeportal">
            <FoodNavbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/add-post" element={<AddPost/>}/>
                <Route path="/posts" element={<Food/>}/>
                <Route path="/posts/:id" element={<SinglePost/>}/>
            </Routes>
        </div>
     );
}
 
export default HomePortal;