
import './App.css';
import { withRouter } from 'react-router-dom';
import Spiky from "./pages/spiky/spiky.js"
import NavBar from "./components/NavBar/NavBar.js"

function App() {
  return (
    <div className="App">
  <NavBar></NavBar>
   <Spiky></Spiky>
    </div>
  );
}

export default withRouter(App);