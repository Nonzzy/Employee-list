import React from 'react';
import adduser from './components/AddUser';
import edituser from './components/EditUser';
import deleteuser from './components/DeleteUser';
import home from './components/Home';
import login from './components/Login';
import register from './components/Register';
import employee from './components/Employees';
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from './Navbar';


function App() {
  return (
  <Router>

<div className="App">
    <Navbar/>

<Router>

<Route exact path="/" component={home}/>
  <Switch>

<Route exact path="/employee" component={employee}>

</Route>
<Route exact path="/login" component={login}/>
  </Switch>
  
  <Route exact path="/register" component={register}/>
</Router>
<Route exact path="/AddUser" component={adduser}>

</Route>
<Route exact path="/edituser" component={edituser}>
</Route>
<Route exact path="/deleteuser" component={deleteuser}>

</Route>
   </div>

</Router>
   
  );
}

export default App;
