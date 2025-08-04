import style from "./login.module.css"

const Login = () => {
    return (
        
        <div className={style.login}>
            <h2>Login</h2>
            <form className={style.form}>
                <div className={style.email}>
                    <label>Email:</label>
                    <input type="email" placeholder="Gmail:-" />
                </div>
                <div className={style.password}>
                    <label>Password:</label>
                    <input type="password" placeholder="Password:-" />
                </div>
                <button type="submit" className={style.login_btn} >Login</button>
            </form>
        </div>
    );
}

export default Login;
