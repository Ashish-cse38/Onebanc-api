import App from './App';
import Details from './Details';
import {
  HashRouter as Router,
  Route
} from "react-router-dom";

function Link() {
  return <div className ="bigblue">
    <Router>
          <Route exact path="/">
            <Details />
          </Route>
          <Route path="/info">
            <App />
          </Route>
      
    </Router>
    </div>;
}

export default Link;