import { Menu } from "antd";

const Nav = () => {
  return (
    <div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={[
          {
            key: "1",
            label: "Home",
          },
          {
            key: "2",

            label: "nav 2",
          },
          {
            key: "3",
            label: "nav 3",
          },
        ]}
      />
    </div>
  );
};
export default Nav;
