import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import SignUp from './components/signUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/homePortal';
import FoodNavbar from './components/navbar';
import Banner from './components/banner';
import SinglePost from './components/singlePost';
import PageNotFound from './components/404';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/home/*" element={<Home/>} />
        <Route path="/banner" element={<Banner/>}/>
        <Route path="/posts/:id" element={<SinglePost/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
