import homecss from './Home.module.css';
import sell from './sell.jpg'
import logo from './logo.jpeg'
const Home = () => {
    return ( 

<div className={homecss.home}>

<body>
        <div className={homecss.wrapper}>
            <div className="navmenu"><nav>
                {/* <a href="landing.html">Home</a>
                <a href="employee.html">Team</a>
                <a href="#">Contact</a>
                <a href="register.html">Register</a> */}
            </nav></div>
            <div className="flexcontainer">
                <div className="log">
                    {/* <img src= {sell} alt="sell"/> */}
                    <img src= {logo} alt="logo"/>
                    <center>
                        <h1>
                            ABOUT
                        </h1>
                        <p>The iPhone is a line of smartphones designed and marketed by Apple Inc.
                            These devices use Apple's iOS mobile operating system. The first-generation
                             iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007.
                           Since then, Apple has annually released new iPhone models and iOS updates.
                            As of November 1, 2018, more than 2.2 billion iPhones had been sold.</p> 
                    </center>
                    
                </div>
                <div className="login">
                    <img src="./logo.jpeg" alt=""/>
                    <form action="">
            
                    </form>
                </div>
            </div>
        </div>
    </body>

</div>


     );
}
 
export default Home;