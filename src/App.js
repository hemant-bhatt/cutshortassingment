import React from 'react'
import {
	BrowserRouter as Router,
	Route, Switch
} from "react-router-dom";

import Home from './Components/Home/Home'
import Result from './Components/result/Result';
import WorkSpaceDetail from './Components/WorkspaceDetails/WorkspaceDetail';
import WorkspaceType from './Components/WorkspaceType/WorkspaceType';


function App(){
    return(
        <Router>
        <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/details">
            <WorkSpaceDetail />
        </Route>
        <Route path="/types">
            <WorkspaceType />
        </Route>
        <Route path="/result">
            <Result />
        </Route>
        </Switch>
        </Router>
    );
}
export default App;
