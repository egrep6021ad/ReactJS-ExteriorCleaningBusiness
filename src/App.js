import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateClientComponent from "./components/CreateClientComponent";
import MainPageComponent from "./components/MainPageComponent";
import ContactComponent from "./components/ContactComponent";
function App() {
  // The key to GitHub pages deployeent is to...
  // 1.) add "basename=..." in the router.
  // Although, routing to other pages is still a problem on GH pages
  console.log(process.env.PUBLIC_URL);
  return (
    <div style={{ backgroundColor: "#F9F1E9", width: "100%" }}>
      <div>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path="/" exact={true} component={MainPageComponent}></Route>
            <Route path="/add-client" component={CreateClientComponent}></Route>
            <Route path="/contact" component={ContactComponent}></Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}
export default App;
//  <Route path ="/" exact component = {ListPatientComponent}></Route>
