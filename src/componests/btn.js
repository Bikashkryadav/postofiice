import "./btn.css"
const Rebtn = (props) => {
    const{btn_label,btn_class }=props
    return (
        <button className={`btn ${btn_class == 'primery' ?"primery" :'btn'} ${btn_class == "secondery" ? "secondery" :"btn"}` } >{btn_label}</button>
    );
}
export default Rebtn