import React from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import {
  changeSeasonToWinter,
  changeSeasonToSpring,
  changeSeasonToSummer,
  changeSeasonToFall,
} from "../../actions";

import "./bottom-navbar.styles.scss";

export default function BottomNavbar() {
  const season = useSelector((state) => state.navbar.season);
  const dispatch = useDispatch();

  return (
    <div className="lg:invisible fixed w-full bottom-0 text-white">
      <nav className="mx-2.5 my-2 py-2 bg-gray-800 shadow-2xl rounded navi">
        <ul className="flex justify-evenly">
          <li>
            <Link
              onClick={() => {
                dispatch(changeSeasonToWinter());
              }}
              to="#"
              className={`flex flex-col ${season === "WINTER" ? "isActive" : "notActive"}`}
            >
              <i className="bi bi-snow2 text-2xl"></i>
              <span className="text-xs">Winter</span>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                dispatch(changeSeasonToSpring());
              }}
              to="#"
              className={`flex flex-col ${season === "SPRING" ? "isActive" : "notActive"}`}
            >
              <i className="bi bi-tree-fill text-2xl"></i>
              <span className="text-xs">Spring</span>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                dispatch(changeSeasonToSummer());
              }}
              to="#"
              className={`flex flex-col ${season === "SUMMER" ? "isActive" : "notActive"}`}
            >
              <i className="bi bi-brightness-high-fill text-2xl"></i>
              <span className="text-xs">Summer</span>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                dispatch(changeSeasonToFall());
              }}
              to="#"
              className={`flex flex-col ${season === "FALL" ? "isActive" : "notActive"}`}
            >
              <i className="bi bi-thermometer-low text-2xl"></i>
              <span className="text-xs">Fall</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
