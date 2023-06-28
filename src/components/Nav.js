import { Menu, MenuProps } from "antd";
import React, { useState } from "react";
import "./../assetss/style/Nav.css";
import {BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { HomeOutlined, ProfileOutlined, LogoutOutlined } from '@ant-design/icons';

const items = [
  {
    label: "Login",
    key: "login",
  },
  {
    label: "Register",
    key: "register",
  },
];

const Nav = () => {
  return (
    <Router >
    <Menu mode="horizontal">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="profile" icon={<ProfileOutlined />}>
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />} >
        Logout
      </Menu.Item>
    </Menu>

    <Route>
      <Route exact path="/">
        {/* Render your home component */}
      </Route>
      <Route path="/profile">
        {/* Render your profile component */}
      </Route>
      <Navigate to="/" />
    </Route>
  </Router>

  );
};
export default Nav;
