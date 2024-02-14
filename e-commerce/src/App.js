import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import ShopCategory from './Context/Pages/ShopCategory';
import Product from './Context/Pages/Product';
import Cart from './Context/Pages/Cart';
import LoginSignup from './Context/Pages/LoginSignup';
import Shop from './Context/Pages/Shop';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}>
        <Route path='/mens' element={<ShopCategory category="Men"/>}/>
        <Route path='/womens' element={<ShopCategory category="women"/>}/>
        <Route path='/kids' element={<ShopCategory category="kid"/>}/>
        <Route path ='/product' element={<Product/>}/>
        <Route path=':productId' element={<product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
