import React from "react";

import "./SideDrawer.css";

const SideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  console.log(drawerClasses);
  if (props.show) {
    drawerClasses = " side-drawer open";
    console.log(drawerClasses);
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/">Product</a>
        </li>
        <li>
          <a href="/">Product</a>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
