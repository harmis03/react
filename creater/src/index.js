import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Header from './Header';
import Contant from './Contant';
import Slider from './Slider';
import Brandregister from './Brandregister';
import Brandlogin from './Brandlogin';
import Creatorregister from './Creatorregister';
import Creatorlogin from './Creatorlogin';
import Information from './Information';
import Creatorhome from './Creatorhome';
import Brand_home from './Brand_home';
import Creator_Contect from './Creator_Contect';
import Footers from './Footers';
import Collabration from './Collabration';
import Footer from './Components/Adminpanel/Footer';
import Headers from './Components/Adminpanel/Headers';
import Dashboard from './Components/Adminpanel/Dashboard';
import Admin from './Components/Adminpanel/Admin';
import View_creator from './Components/Adminpanel/View_creator';
import Sidemenu from './Components/Adminpanel/Sidemenu';
import Brand_add from './Components/Adminpanel/Brand_add';
import Add_brand from './Components/Adminpanel/Add_brand';
import Add_Product from './Components/Adminpanel/Add_Product';
import Add_creator from './Components/Adminpanel/Add_creator';
import Brand_Contect from './Brand_Contect';
import View_brand from './Components/Adminpanel/View_brand';
import Add_collabration from './Components/Adminpanel/Add_collabration';
import Blog from './Blog';
import Update_creator from './Components/Adminpanel/Update_creator';
import Update_brand from './Components/Adminpanel/Update_brand';
import Creator_dashboard from './Creator_dashboard';
import Welcome from './WelcomeForCreator';
import Wishlist from './Wishlist';
import CollabrationDetails from './CollabrationDetails';
import { Provider } from 'react-redux';
import Store from "./Redux/Store/Store";
import Allcreator from './Allcreator';
import HeaderForCreator from './HeaderForCreator';
import WelcomeForCreator from './WelcomeForCreator';
import HeadetForBrand from './HeadetForBrand';
import Allbrand from './Allbrand';
import WelcomeForBrand from './WelcomeForBrand';
import SettingForCreator from './SettingForCreator';
import SettingForBrand from './SettingForBrand';
import Brand_dashboard from './Brand_dashboard';
import HeaderForWishlist from './HeaderForWishlist';
import BrandCampaigns from './BrandCampaigns';
import Detailget from './Detailget';
import Privacypolic from './Privacypolic';
import Wishlistforcreator from './Wishlistforcreator';
import Headerforcreatorwithwishlist from './Headerforcreatorwithwishlist';
import Collabrationforcreator from './Collabrationforcreator';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
  <BrowserRouter>
    <Routes>
      <Route path='/App' element={<App />}></Route>
      <Route path='/' element={<Register />}></Route>
      <Route path='/Login' element={<Login />}></Route>
      <Route path='/Header' element={<Header />}></Route>
      <Route path='/Contant' element={<Contant />}></Route>
      <Route path='/Slider' element={<Slider />}></Route>
      <Route path='/Brandregister' element={<Brandregister />}></Route>
      <Route path='/Brandlogin' element={<Brandlogin />}></Route>
      <Route path='/Creatorregister' element={<Creatorregister />}></Route>
      <Route path='/Creatorlogin' element={<Creatorlogin />}></Route>
      <Route path='/Information' element={<Information />}></Route>
      <Route path='/Footers' element={<Footers />}></Route>
      <Route path='/Creatorhome' element={<Creatorhome />}></Route>
      <Route path='/Brand_home' element={<Brand_home />}></Route>
      <Route path='/Creator_Contect' element={<Creator_Contect />}></Route>
      <Route path='/Brand_Contect' element={<Brand_Contect />}></Route>
      <Route path='/Headers' element={<Headers />}></Route>
      <Route path='/Sidemenu' element={<Sidemenu />}></Route>
      <Route path='/Dashboard' element={<Dashboard />}></Route>
      <Route path='/Footer' element={<Footer />}></Route>
      <Route path='/Collabration' element={<Collabration />}></Route>
      <Route path='/Admin' element={<Admin />}></Route>
      <Route path='/View_creator' element={<View_creator />}></Route>
      <Route path='/View_brand' element={<View_brand />}></Route>
      <Route path='/Brand_add' element={<Brand_add />}></Route>
      <Route path='/Add_brand' element={<Add_brand />}></Route>
      <Route path='/Add_Product' element={<Add_Product />}></Route>
      {/* <Route path='/Update_Product' element={<Update_Product/>}></Route> */}
      <Route path='/Add_creator' element={<Add_creator />}></Route>
      <Route path='/Add_collabration' element={<Add_collabration />}></Route>
      <Route path='/Blog' element={<Blog />}></Route>
      <Route path='/Update_creator' element={<Update_creator />}></Route>
      <Route path='/Update_brand' element={<Update_brand />}></Route>
      <Route path='/Creator_dashboard' element={<Creator_dashboard/>}></Route>
      <Route path='/Brand_dashboard' element={<Brand_dashboard/>}></Route>
      <Route path='/WelcomeForCreator' element={<WelcomeForCreator/>}></Route>
      <Route path='/Wishlist' element={<Wishlist/>}></Route>
      <Route path='/SettingForCreator' element={<SettingForCreator/>}></Route>
      <Route path='/CollabrationDetails' element={<CollabrationDetails/>}></Route>
      <Route path='/AllCreator' element={<Allcreator/>}></Route>
      <Route path='/HeaderForCreator' element={<HeaderForCreator/>}></Route>
      <Route path='/HeaderForBrand' element={<HeadetForBrand/>}></Route>
      <Route path='/Allbrand' element={<Allbrand/>}></Route>
      <Route path='/WelcomeForBrand' element={<WelcomeForBrand/>}></Route>
      <Route path='/SettingForBrand' element={<SettingForBrand/>}></Route>
      <Route path='/HeaderForWishlist' element={<HeaderForWishlist/>}></Route>
      <Route path='/BrandCampigns' element={<BrandCampaigns/>}></Route>
      <Route path='/Detailget' element={<Detailget/>}></Route>
      <Route path='/Privacypolic' element={<Privacypolic/>}></Route>
      <Route path='/Wishlistforcreator' element={<Wishlistforcreator/>}></Route>
      <Route path='/Headerforcreatorwithwishlist' element={<Headerforcreatorwithwishlist/>}></Route>
      <Route path='/Collabrationforcreator' element={<Collabrationforcreator/>}></Route>
     
    </Routes>
  </BrowserRouter>
  </Provider>
);

reportWebVitals();
