/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
// import TableList from "views/TableList.js";
import Member from "views/Member.js";
import Sessions from "views/Sessions.js";
import Administrators from "views/Administrator.js";
import Exercises from "views/Exercises.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";

const dashboardRoutes = [
  
  {
    path: "/Admin",
    name: "Administateurs",
    icon: "nc-icon nc-circle-09",
    component: Administrators,
    layout: "/admin"
  },
  // {
  //   path: "/Member",
  //   name: "Membres",
  //   icon: "nc-icon nc-single-02",
  //   component: Member,
  //   layout: "/admin"
  // },
  // {
  //   path: "/table",
  //   name: "Session",
  //   icon: "nc-icon nc-notes",
  //   component: Sessions,
  //   layout: "/admin"
  // },
  // {
  //   path: "/typography",
  //   name: "Exercices",
  //   icon: "nc-icon nc-paper-2",
  //   component: Exercises,
  //   layout: "/admin"
  // },

  // {
  //   path: "/user",
  //   name: "Membres",
  //   icon: "nc-icon nc-single-02",
  //   component: UserProfile,
  //   layout: "/admin"
  // },

  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-atom",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications,
  //   layout: "/admin"
  // }
];

export default dashboardRoutes;
