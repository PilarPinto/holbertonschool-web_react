import React from "react";
import './App.css';
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList'
function App({ isLoggedIn }) {
  return (
    <div className="container">
      <Notifications></Notifications>
      <Header></Header>
      {isLoggedIn && <CourseList/>}
      {!isLoggedIn && <LoginComponent></LoginComponent>}
      <Footer></Footer>
    </div>
  );
}
App.defaultProps = {
  isLoggedIn: true
}
export default App;