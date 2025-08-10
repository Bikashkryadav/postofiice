import style from './product.module.css'
import {Buttonstyle} from "./style"
const Product = (props) => {
    const {imagesrc,title,price,disprice} = props;
    return (
        <>
        {/* "https://static.booktopia.com.au/internals/9781847941831-3.jpg" */}
        <div className={style.product}>
            <img className={style.image} src={imagesrc} alt="Product" />
            <h2 className={style.title}>{title}</h2>
            <p className={style.description}>Description of the product goes here.</p>
            <p className={style.price}>Price: {price}</p>
            <p className={style.price}><u>Price: {disprice}</u></p>
            <Buttonstyle>Add to Cart</Buttonstyle>
            <Buttonstyle>Buy Now</Buttonstyle>      
        </div>
        </>
    );
}
export default Product;