import "./product-profile.css";
import Product from './product';
import {Buttonstyle} from "./style"
const ProductProfile = () => {
    return (
        <>
            <div className="product-profile">
                <div className="product-image">
                    <img src="https://static.booktopia.com.au/internals/9781847941831-3.jpg" alt="Product Profile" />
                </div>
                <div className="product-details">
                    <h2>Product Name</h2>
                    <p>Description of the product profile goes here.</p>
                    <div className="product-price">
                        <p>Price: $XX.XX</p>
                        <p>Price: <u>$XX.XX</u></p>
                    </div>
                    <div className="buttons">
                        <Buttonstyle>Add to Cart</Buttonstyle>
                        <Buttonstyle>Buy Now</Buttonstyle>
                    </div>
                </div>
                <div className="product-reviews">
                    <h3>Reviews</h3>
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </>
    );
}
export default ProductProfile;