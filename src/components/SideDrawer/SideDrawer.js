import { Link } from 'gatsby';
import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link
            to="/"
          >Home</Link>
        </li>
        <li>
          <Link
          to="/page-2">
          Abput Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
