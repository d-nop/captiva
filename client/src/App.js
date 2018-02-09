import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Locator from "./components/geoLocated";
import Video from "./components/multi-media/VideoCapture";
import WebCapture from "./components/multi-media/WebCapture";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Logo from "./components/Logo";
import Home from "./components/Home"; 

class App extends Component {
  getValues = event => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    event.preventDefault();
    console.log("works fine");
  };

  render() {
    return (
      <div>
       <Home/>
         </div>
    );
  }
}

export default App; 

//<Navbar getValues={this.getValues} />
//<Logo />
 //<Login getValues={this.getValues} onSubmit={this.onSubmit} />
// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div className="App">
//           <div className="App-header">
//             <img src={logo} className="App-logo" alt="logo" />
//             <div>
//               <Switch>
//                 <Route exact path="/video" component={Video} />

//                 <Route exact path="/camera" component={WebCapture} />
//               </Switch>
//             </div>
//           </div>
//         </div>
//       </Router>
//     );
//     // return (
//     //   <div className="App">
//     //     <div className="App-header">
//     //       <img src={logo} className="App-logo" alt="logo" />
//     //       <div>
//     //         <Locator />
//     //         <Video />
//     //         <CamCapture />
//     //       </div>
//     //     </div>
//     //   </div>
//     // );
//   }
// }
