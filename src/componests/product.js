import style from './product.module.css'
import {Buttonstyle} from "./style"
const Product = () => {
    return (
        <>
        <div className={style.product}>
            <img className={style.image} src="https://static.booktopia.com.au/internals/9781847941831-3.jpg" alt="Product" />
            <h2 className={style.title}>Product Name</h2>
            <p className={style.description}>Description of the product goes here.</p>
            <p className={style.price}>Price: $XX.XX</p>
            <p className={style.price}><u>$XX.XX</u></p>
            <Buttonstyle>Add to Cart</Buttonstyle>
            <Buttonstyle>Buy Now</Buttonstyle>      
        </div>
        </>
    );
}
export default Product;
