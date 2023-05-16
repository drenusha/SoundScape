import { Menu, MenuProps } from "antd";
import React, { useState } from "react";
import "./../assetss/style/Nav.css";

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
    <div>
      <Menu
        className="menu"
        mode="horizontal"
        items={items}
      />
    </div>
  );
};
export default Nav;
