import { Link } from 'react-router-dom';
import employeecss from './Employee.module.css';


const Employees = () => {

    return (
    <div className={employeecss.employee}>

    <body>


                <div className={employeecss.wrapper}>
                   
                                                   
                        <div className={employeecss.ourteam}>
                        <div className={employeecss.teammember}>
                            <div className={employeecss.memberimg}>
                               
                            </div>
                            <span>Enter Name & Email</span>
                         
                       </div>                    
                       
                       </div>    
         
                        </div>                     
                    <div className={employeecss.ourteam}>

                        
                <div className="login">
                
                </div>
            </div>

         <div class="container">
    <input type="text" placeholder="enter name" name="uname" required/>
    <input type="text" placeholder="enter email" name="mail" required/>
        
    <Link to= "/AddUser" type="submit">Add User</Link>
  </div>
  <div>
  <button type="submit">Edit</button>
    <button type="submit">Delete</button>
  </div>

    </body>
</div>

    );
}
export default Employees;