import style from "./login.module.css"
import {Inputstyle,Buttonstyle} from './style'

const Login = () => {
    return (
        
        <div className={style.login}>
            <h2>Login</h2>
            <form className={style.form}>
                <div className={style.email}>
                    <label>Email:</label>
                    <Inputstyle type="email" placeholder="Gmail:-" />
                </div>
                <div className={style.password}>
                    <label>Password:</label>
                    <Inputstyle type="password" placeholder="Password:-" />
                </div>
                <Buttonstyle type="submit" >Login</Buttonstyle>
            </form>
        </div>
    );
}

export default Login;
