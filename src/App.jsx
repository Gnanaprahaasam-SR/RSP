import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
// import Description from './pages/Description';
// import MyCart from './pages/MyCart';
// import WishList from './pages/WishList';
import Home from './pages/Home';
import AboutUsPage from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Catogory from './pages/Catogory';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/aboutUs' element={<AboutUsPage/>}/>
        {/* <Route path='/mycart' element={<MyCart/>}/> */}
        {/* <Route path='/wishlist' element={<WishList />}/> */}
        {/* <Route path='/product' element={<Description/>}/> */}
        <Route path='/contactUs' element={<ContactUs/>}/>
        <Route path='/shop' element={<Catogory/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
