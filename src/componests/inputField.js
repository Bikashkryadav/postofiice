import styles from './inputField.css';
const InputField = () =>{
    return(
        <input className={styles.reuseableinputfield} 
        type="text" 
        placeholder="Enter text" />

    );
}
export default InputField;