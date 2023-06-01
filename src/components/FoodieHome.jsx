
import { Link } from "react-router-dom";
import "../styles/FoodieHome.css"


const Home = () => {
    return ( 
        <div className="home ">
           
        <div className="home d-flex">
            <div className="first d-lg-flex d-sm-block  ">
            <div className="new">
                <img src="images/15.jpg" alt="" height="700" width="1000" />
            </div>
            <div className="first  p-5">
                <p>FEATURED POSTS</p>
                <h1>Love the <br /> Delicious & <br /> <span> Tasty Foods </span></h1>
                <p>A small river named Duden flows <br /> by their place and supplies it with <br /> the necessary regelialia</p>
                <Link to="/home/add-post" className="btn btn-dark btn-lg mx-3 "id="ten"> Add a post &gt;</Link>
            </div>
            </div>
        </div>
        <div className="second">
            <h1>Recent Stories</h1>
            <div className="one">
                <div className="imgone">
                <img id="top" src="images/7.jpg" alt="" height="250" width="330" />
                <p>Desert ------------- March 01,2018</p>
                <h1>Tasy & Delicious Food</h1>
                <h2>Read More &gt;</h2>
                </div>
                <div className="imgtwo">
                <img id="top1" src="images/13.jpg" alt="" height="250" width="330" />
                <p>Desert ------------- March 01,2018</p>
                <h1>Tasy & Delicious Food</h1>
                <h2>Read More &gt;</h2>
                </div>
            </div>
            <div className="two">
                <div className="imgon">
                    <img src="images/8.jpg" alt="" height="250" width="330" />
                    <p>Desert ------------- March 01,2018</p>
                <h1>Tasy & Delicious Food</h1>
                <h2>Read More &gt;</h2>
                </div>
                <div className="imgtw">
                    <img src="images/5.jpg" alt="" height="250" width="330"/>
                    <p>Desert ------------- March 01,2018</p>
                <h1>Tasy & Delicious Food</h1>
                <h2>Read More &gt;</h2>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default Home;