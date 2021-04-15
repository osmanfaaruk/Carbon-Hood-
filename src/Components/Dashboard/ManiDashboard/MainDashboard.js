import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import SidebarRoute from "../SidebarRoute/SidebarRoute";


const MainDashboard = () => {
    return (
        <Router>
        <div className="row">
            <Switch>
                 <div className="col-3">
                     <SidebarRoute/>
                 </div>
            </Switch>
            <Switch>
                <div className="col-9" >
                    {/* <Route path="/dashboard/manageBooks">
                     <ManageProduct/>
                    </Route>
                    <Route path="/dashboard/admin">
                     <Admin/>
                    </Route> */}
                </div>
            </Switch>
        </div>
    </Router>
    );
};

export default MainDashboard;