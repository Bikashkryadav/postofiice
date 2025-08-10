import './App.css';
import Header from './componests/header';
import Footer from './componests/footer';
import Product from './componests/product';
import ProductProfile from './componests/prodect-profile';
import Login from './componests/login';
import Rebtn from './componests/btn'
// import InputField from './componests/inputField';

function App() {
  return (
    <>
      {/* <Header />
      <div className="product-list">
        <Product imagesrc="https://static.booktopia.com.au/internals/9781847941831-3.jpg" title="Atomic habits" price="$20.00" disprice="$40.00"   />
        <Product imagesrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv019uzMev1wWzBOVSCJMuxhtpTxrH_B1kaA&s" title="You can" price="$25.00" disprice="$35.00"   />
        <Product imagesrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPlUdn8EfZr7YcEqYfKhfTCYB0HaWymgE9fA&s" title="can't hurt me" price="$40.00" disprice="$60.00"   />
        
      </div>
      <ProductProfile />
      <Login /> */}
      {/* Add more components as needed */}
      {/* Example: <Cart /> */}
      {/* Example: <Checkout /> */}
      {/* Example: <OrderHistory /> */}


      {/* <Footer /> */}
      <Rebtn btn_label="Click me" btn_class="secondery" />
      <Rebtn btn_label="Do not click me" btn_class="primery" />

    </>
  );
}
      
export default App;