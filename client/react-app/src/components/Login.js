import logincss from './Login.module.css';
//import Navbar from '../Navbar';
const Login = () => {

    return ( 

<div className={logincss.login}>

<body>
        <div className={logincss.wrapper}>
            <div class="navmenu"><nav>
                
               {/* <a href="landing.html">Home</a>
                <a href="employee.html">Team</a>
                <a href="#">Contact</a>
    <a href="register.html">Register</a> */}
            </nav></div>

            <div class="flex-container">
                <div class="log">
                    <center>
                        <h1>
                            Login
                        </h1>
                        <p>Sign in to your account</p> 
                    </center>
                    
                </div>
                <div class="login">
                    <form action="">
                        <input type="text" placeholder="username"/><br/>
                        <input type="password" placeholder="password"/><br/>
                        <a href="register.html">Register</a>
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    </body>
    </div>

    );
}
 
export default Login;