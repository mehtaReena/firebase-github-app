import {
    BrowserRouter as Router,
    Switch,
    Route

} from "react-router-dom";
import Home from './Home.jsx';
import App from './App';


export default function Main() {

    return (

        <Router>
            <Switch>
                <Route exact path="/" component={App} />

                <Route path="/home" component={Home} />

                <Route path="/404">
                    <h2> Page not found</h2>
                </Route>
            </Switch>


        </Router>
    )
}