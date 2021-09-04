import './App.css';
import { withRouter } from 'react-router-dom';
import Spiky from "./pages/spiky/spiky.js"
import NavBar from "./components/NavBar/NavBar.js"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import ChartPage from "./pages/chartPage/chartPage"

function App() {
    return ( <
        div className = "App" >

        <
        Router >
        <
        NavBar > < /NavBar> <
        Switch >
        <
        Route exact path = "/" >
        <
        Spiky / >
        <
        /Route> <
        Route path = "/charts" >
        <
        ChartPage / >
        <
        /Route> <
        /Switch> <
        /Router> <
        /div>
    );
}

export default withRouter(App);