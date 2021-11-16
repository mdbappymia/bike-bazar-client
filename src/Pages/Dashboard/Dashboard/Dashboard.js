import React from "react";
import { Button, Col, Container, NavDropdown, Row } from "react-bootstrap";
import "./Dashboard.css";
import InsertItem from "../InsertItem/InsertItem";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import MyOrder from "../MyOrder/MyOrder";
import InsertReview from "../InsertReview/InsertReview";
import Payment from "../Payment/Payment";
import useAuth from "../../../hooks/useAuth";
import ManageAllOrder from "../ManageAllOrder/ManageAllOrder";
import ManageProducts from "../ManageProducts/ManageProducts";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AdminRoute from "../AdminRoute/AdminRoute";
import Footer from "../../Shared/Footer/Footer";

const Dashboard = () => {
  const { logOut, admin } = useAuth();
  let { path, url } = useRouteMatch();
  return (
    <div>
      <div className="dashboard-page">
        <Container>
          <Row>
            <div className="d-flex top-bar-dashboard justify-content-between">
              <h1 className="fw-bold py-2">DASHBOARD</h1>
              <NavDropdown
                className="text-white"
                title="Menu"
                id="basic-nav-dropdown"
              >
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to={`${url}/myOrder`}
                    >
                      My Order
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={`${url}/pay`}>
                      Pay
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={`${url}/review`} className="nav-link ">
                      Review
                    </Link>
                  </li>
                  {admin && (
                    <>
                      <li className="nav-item">
                        <Link
                          to={`${url}/manageAllOrder`}
                          className="nav-link "
                        >
                          Manage All Order
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to={`${url}/insertItem`} className="nav-link ">
                          Insert Product
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to={`${url}/manageProducts`}
                          className="nav-link "
                        >
                          Manage All Products
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to={`${url}/makeAdmin`} className="nav-link ">
                          Make Admin
                        </Link>
                      </li>
                    </>
                  )}

                  <li>
                    <Button variant="danger" onClick={logOut} className="ms-3">
                      Logout
                    </Button>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link my-5" to="/">
                      Back to home
                    </Link>
                  </li>
                </ul>
              </NavDropdown>
            </div>
            <Col className="dashboard-item-left " lg={3}>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={`${url}/myOrder`}
                  >
                    My Order
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={`${url}/pay`}>
                    Pay
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={`${url}/review`} className="nav-link ">
                    Review
                  </Link>
                </li>
                {admin && (
                  <>
                    <li className="nav-item">
                      <Link to={`${url}/manageAllOrder`} className="nav-link ">
                        Manage All Order
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to={`${url}/insertItem`} className="nav-link ">
                        Insert Product
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to={`${url}/manageProducts`} className="nav-link ">
                        Manage All Products
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to={`${url}/makeAdmin`} className="nav-link ">
                        Make Admin
                      </Link>
                    </li>
                  </>
                )}

                <li>
                  <Button variant="danger" onClick={logOut} className="ms-3">
                    Logout
                  </Button>
                </li>
                <li className="nav-item">
                  <Link className="nav-link my-5" to="/">
                    Back to home
                  </Link>
                </li>
              </ul>
            </Col>
            <Col lg={9}>
              <Switch>
                <Route exact path={path}>
                  <MyOrder></MyOrder>
                </Route>
                <Route exact path={`${path}/myOrder`}>
                  <MyOrder></MyOrder>
                </Route>
                <Route exact path={`${path}/review`}>
                  <InsertReview></InsertReview>
                </Route>
                <Route exact path={`${path}/pay`}>
                  <Payment></Payment>
                </Route>
                <AdminRoute exact path={`${path}/manageAllOrder`}>
                  <ManageAllOrder></ManageAllOrder>
                </AdminRoute>
                <AdminRoute exact path={`${path}/insertItem`}>
                  <InsertItem></InsertItem>
                </AdminRoute>
                <AdminRoute exact path={`${path}/manageProducts`}>
                  <ManageProducts></ManageProducts>
                </AdminRoute>
                <AdminRoute path={`${path}/makeAdmin`}>
                  <MakeAdmin></MakeAdmin>
                </AdminRoute>
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
