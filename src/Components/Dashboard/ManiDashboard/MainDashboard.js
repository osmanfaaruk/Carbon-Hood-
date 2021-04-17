import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SidebarRoute from "../SidebarRoute/SidebarRoute";
import AddService from "../AddService/AddService";
import AddReview from "../../AddReview/AddReview";
import ManageService from "../ManageService/ManageService";
import Book from "../Book/Book";
import OrderList from "../OrderList/OrderList";
import MakeAdmin from "../MakeAdmin/MakeAdmin";





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
            <Route path="/dashboard/order-list">
            <OrderList/>
            </Route>
            <Route path="/dashboard/make-admin">
            <MakeAdmin/>
            </Route>
          </div>
        </Switch>
      </div>
    </Router>
  );
};

export default MainDashboard;
