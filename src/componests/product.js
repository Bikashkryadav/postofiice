import style from './product.module.css'
const Product = () => {
    return (
        <>
        <div className={style.product}>
            <img className={style.image} src="https://static.booktopia.com.au/internals/9781847941831-3.jpg" alt="Product" />
            <h2 className={style.title}>Product Name</h2>
            <p className={style.description}>Description of the product goes here.</p>
            <p className={style.price}>Price: $XX.XX</p>
            <p className={style.price}><u>$XX.XX</u></p>
            <button className={style.button}>Add to Cart</button>
            <button className={style.button} >Buy Now</button>      
        </div>
        </>
    );
}
export default Product;
