import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import InsertItem from "./Pages/Dashboard/InsertItem/InsertItem";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./context/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import PrivetRoute from "./Pages/Login/PrivetRoute/PrivetRoute";
import "./App.css";
import ExploreHome from "./Pages/Explore/ExploreHome/ExploreHome";
import Details from "./Pages/Details/Details/Details";
import NotFoundPage from "./Pages/Shared/NotFoundPage/NotFoundPage";
import About from "./Pages/About/About";
const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/insertItem">
            <InsertItem></InsertItem>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivetRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivetRoute>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <PrivetRoute path="/products/:id">
            <Details></Details>
          </PrivetRoute>
          <Route path="/explore">
            <ExploreHome></ExploreHome>
          </Route>
          <Route path="*">
            <NotFoundPage></NotFoundPage>
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
