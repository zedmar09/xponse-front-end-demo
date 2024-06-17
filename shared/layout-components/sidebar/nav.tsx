import React from "react";
const Dashboardsvg = <i className="ri-pie-chart-line side-menu__icon"></i>;
const Usersvg = <i className="ri-user-3-line side-menu__icon"></i>;
const NestedSvg = <i className="ri-node-tree side-menu__icon"></i>;
// const AuthenticationSvg =  <i className="ri-error-warning-line side-menu__icon"></i>;

export const MenuItems: any = [
  {
   icon: Dashboardsvg,
    title: "Dashboard",
    type: "link",
    path: "/components/dashboards/dashboard/",
    active: false,
    selected: false,
  },

  {
    id: 2,
    icon: Usersvg,
    title: "Users Management",
    type: "sub",
    active: false,
    selected: false,
    children: [
      {
        id: 3,
        path: "/components/users/dealers/dealers",
        type: "link",
        active: false,
        selected: false,
        title: "Dealers",
      },
      {
        title: "Distributors",
        path: "#!",
        type: "link",
        active: false,
        selected: false,
      },
      {
        title: "Customers",
        path: "#!",
        type: "link",
        active: false,
        selected: false,
      },
      {
        title: "Admins",
        path: "#!",
        type: "link",
        active: false,
        selected: false,
      },
    ],
  },
  // {
	// icon: Dashboardsvg,
	//  title: "Roles & Permissions",
	//  type: "link",
	//  path: "#!",
	//  active: false,
	//  selected: false,
  //  },
  //  {
	// icon: Dashboardsvg,
	//  title: "Document Library",
	//  type: "link",
	//  path: "#!",
	//  active: false,
	//  selected: false,
  //  },
  //  {
	// icon: Dashboardsvg,
	//  title: "API",
	//  type: "link",
	//  path: "#!",
	//  active: false,
	//  selected: false,
  //  },
  //  {
	// icon: Dashboardsvg,
	//  title: "Products",
	//  type: "link",
	//  path: "#!",
	//  active: false,
	//  selected: false,
  //  },
  //  {
	// icon: Dashboardsvg,
	//  title: "Orders",
	//  type: "link",
	//  path: "#!",
	//  active: false,
	//  selected: false,
  //  },
  //  {
	// icon: Dashboardsvg,
	//  title: "Subscriptions",
	//  type: "link",
	//  path: "#!",
	//  active: false,
	//  selected: false,
  //  },
  //  {
  //   icon: Dashboardsvg,
  //    title: "Logs & History",
  //    type: "link",
  //    path: "#!",
  //    active: false,
  //    selected: false,
  //    },
   
];
export default MenuItems;
