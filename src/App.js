import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
     <h1 className='text-3xl font-serif font-extrabold text-orange-400 bg-red-100'>Welcome To My Dream ProJect !!!!</h1>
     <Header></Header>
     <Routes>
       <Route path="/" element={<Home></Home>} ></Route>
       <Route path="/reviews" element={<Reviews></Reviews>}></Route>
       <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
       <Route path="/blogs" element={<Blogs></Blogs>}></Route>
       <Route path="about" element={<About></About>}></Route>
       <Route path="*" element={<NotFound></NotFound>}></Route>
     </Routes>
    </div>
  );
}

export default App;
