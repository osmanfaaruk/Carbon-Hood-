import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SidebarRoute from "../SidebarRoute/SidebarRoute";
import AddService from "../AddService/AddService";
import AddReview from "../../AddReview/AddReview";
import ManageService from "../ManageService/ManageService";
import Book from "../Book/Book";





const MainDashboard = () => {
  return (
    <Router>
      <div className="row">
        <Switch>
          <div className="col-3">
            <SidebarRoute />
          </div>
        </Switch>
        <Switch>
          <div className="col-9">
            <Route path="/dashboard/add-services">
              <AddService />
            </Route>
            <Route path="/dashboard/add-review">
            <AddReview/>
            </Route>
            <Route path="/dashboard/manage-services">
            <ManageService/>
            </Route>
            <Route path="/dashboard/book-list">
            <Book/>
            </Route>
            {/* <img className="img-fluid" style={{width: '600px', marginLeft:"350px", marginTop:"150px"}} src={Img} alt=""/> */}
          </div>
        </Switch>
      </div>
    </Router>
  );
};

export default MainDashboard;
