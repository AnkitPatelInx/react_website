import React, { Profiler } from 'react';
// import ReactTable from "react-table";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";  
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";  
import Home from "./Home"
import About from "./About?t=355"
import Service from "./Service"
import Users from "./Contact"
import Navbar from "./Navbar"
import Categories from "./Categories.jsx"
import { Switch, Route, Redirect } from 'react-router-dom';
import GoogleBtn from './GoogleBtn.js';
import TwitterBtn from './Twitterlogin.js';
import Firebasebtn from './Firebase.js';

class App extends React.Component{
  render(){

    return(<>
      <Navbar />
      <div className="container-fluid">
          <div className="raw">
              <div className="col-10 mx-auto abcd">
                {/* <GoogleBtn />
                <TwitterBtn /> */}
                <Firebasebtn />
              </div>
          </div>
      </div>
      <div className="container-fluid">
          <div className="raw">
              <div className="col-10 mx-auto">
      
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/contact" component={Users} />
                  <Route exact path="/service" component={Service} />
                  <Route exact path="/react_website" component={Categories} />
                  <Redirect to="/" />
                </Switch>
                
              </div>
          </div>
      </div>
      </>);
  };
}

// function App() {
//   return (
//     <>
//     <Navbar />
//     <div className="container-fluid">
//         <div className="raw">
//             <div className="col-10 mx-auto abcd">
//               ANK
//             </div>
//         </div>
//     </div>
//     <div className="container-fluid">
//         <div className="raw">
//             <div className="col-10 mx-auto">
    
//               <Switch>
//                 <Route exact path="/" component={Home} />
//                 <Route exact path="/about" component={About} />
//                 <Route exact path="/contact" component={Users} />
//                 <Route exact path="/service" component={Service} />
//                 <Route exact path="/react_website" component={Categories} />
//                 <Redirect to="/" />
//               </Switch>
              
//             </div>
//         </div>
//     </div>
//     </>
//   );
// }

export default App;