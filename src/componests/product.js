import "./product.css";
const Product = () => {
    return (
        <>
        <div className="product">
            <img src="https://static.booktopia.com.au/internals/9781847941831-3.jpg" alt="Product" />
            <h2>Product Name</h2>
            <p>Description of the product goes here.</p>
            <p>Price: $XX.XX</p>
            <p>Price: <u>$XX.XX</u></p>
            <button>Add to Cart</button>
            <button>Buy Now</button>      
        </div>
        </>
    );
}
export default Product;
