import React from "react";
import addusercss from './Add.module.css';

export const EditUser = () => {
    return (  
        
        <div className={addusercss.edituser}>

        <body>
        <div className={addusercss.wrapper}>
            <h3>Edit Employer</h3>

        <form>
            
                <input type="text" placeholder="enter name"></input>               
           
            <button type= "submit">Edit Name</button>
        </form>
        </div>
        </body>
</div>
    );
}
 
export default EditUser;