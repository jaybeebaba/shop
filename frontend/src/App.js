import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";


function App() {

  const user = true
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={user? <Navigate to="/"/> : <Login/>}/>
        <Route path="/register" element={user? <Navigate to="/"/> : <Register/>}/>
        <Route path="/products/:category" element={<ProductList/>}/>
        <Route path="/product/:id" element={<Product/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
