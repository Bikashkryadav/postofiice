import './App.css';
import Header from './componests/header';
import Footer from './componests/footer';
import Product from './componests/product';
import ProductProfile from './componests/prodect-profile';
import Login from './componests/login';

function App() {
  return (
    <>
      <Header />
      <div className="product-list">
        <Product />
        <Product />
        <Product />
      </div>
      <ProductProfile />
      <Login />
      {/* Add more components as needed */}
      {/* Example: <Cart /> */}
      {/* Example: <Checkout /> */}
      {/* Example: <OrderHistory /> */}
      <Footer />
      {/* <Button /> */}
    </>
  );
}
      
export default App;