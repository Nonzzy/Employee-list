import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios'
import addusercss from './Add.module.css';


function AddUser() {
    const [EmployName, setEmployName] = useState("")
    const [EmployAge, setEmployAge] = useState("")


    const AddUser = () => {
        axios.post("http://localhost:3001/read", { EmployName: EmployName, EmployAge: EmployAge })
    }

    return (
        <body>
            <div className={addusercss.adduser}>

                <div className={addusercss.adduser}>


                    <div className={addusercss.wrapper}>
                        <h3>Add Employer</h3>

                            <input type="text" name="EmployName" id="" placeholder="Name" onChange={(event) => { setEmployName(event.target.value) }} /><br />
                            <input type="text" name="EmployAge" id="" placeholder="Age" onChange={(event) => { setEmployAge(event.target.value) }} /><br />

                            <button onClick={AddUser}>Add User</button>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default AddUser;