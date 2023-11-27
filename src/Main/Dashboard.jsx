import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const isAdmin = true;
  return (
    <div className="flex">
      <div className="w-64 min-h-full bg-orange-400">
        <ul>
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/teacherRequest">
                  Teacher Request
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="/dashboard/userss">Users</NavLink>{" "}
              </li>
              <li>
                <NavLink to="/dashboard/allClassess">All Classes</NavLink>{" "}
              </li>
              <li>
                <NavLink to="/dashboard/adminProfile">Profile</NavLink>{" "}
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/myEnrollClass">My enroll class</NavLink>{" "}
              </li>
              <li>
                <NavLink to="/dashboard/studentProfile">Profile</NavLink>{" "}
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
