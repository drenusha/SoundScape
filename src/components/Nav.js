import { Menu } from "antd";

const Nav = () => {
  return (
    <div>
      <Menu
        className="menu"
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={[
          {
            key: "1",
            label: "Login",
          },
          {
            key: "2",

            label: "Register",
          },
        ]}
      />
    </div>
  );
};
export default Nav;
