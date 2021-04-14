import React from "react";
// import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import MyListBox from "../listbox/listbox-component";
// import { ReactComponent as Logo } from "../../logo.svg";

import "./header.styles.scss";

import {
  changeSeasonToWinter,
  changeSeasonToSpring,
  changeSeasonToSummer,
  changeSeasonToFall,
  changeSeasonToTBA,
  changeSeasonToAiring,
  changeToReviews,
} from "../../actions";
import { Link } from "react-router-dom";

function Header() {
  const season = useSelector((state) => state.navbar.season);
  const status = useSelector((state) => state.navbar.status);
  const year = useSelector((state) => state.navbar.year);

  const dispatch = useDispatch();

  return (
    <div className="hidden lg:flex h-16 text-gray-500 bg-gray-800 justify-between items-center py-5 px-12">
      <div>
        <span className="text-2xl text-gray-100 font-bold">Nekomori</span>
      </div>
      <div className="flex">
        <Link
          to="/"
          className={`mx-3 text-sm ${
            season === "WINTER" ? "isActive" : "notActive"
          } cursor-pointer`}
          onClick={() => {
            dispatch(changeSeasonToWinter());
          }}
        >
          WINTER <br /> {year}
        </Link>
        <Link
          to="/"
          className={`mx-3 text-sm ${
            season === "SPRING" ? "isActive" : "notActive"
          } cursor-pointer`}
          onClick={() => {
            dispatch(changeSeasonToSpring());
          }}
        >
          SPRING <br /> {year}
        </Link>
        <Link
          to="/"
          className={`mx-3 text-sm ${
            season === "SUMMER" ? "isActive" : "notActive"
          } cursor-pointer`}
          onClick={() => {
            dispatch(changeSeasonToSummer());
          }}
        >
          SUMMER <br /> {year}
        </Link>
        <Link
          to="/"
          className={`mx-3 text-sm ${season === "FALL" ? "isActive" : "notActive"} cursor-pointer`}
          onClick={() => {
            dispatch(changeSeasonToFall());
          }}
        >
          FALL <br /> {year}
        </Link>
      </div>
      <div className="flex">
        <Link
          to="/"
          className={`mx-3 text-sm ${
            status === "NOT_YET_RELEASED" ? "isActive" : "notActive"
          } cursor-pointer`}
          onClick={() => {
            dispatch(changeSeasonToTBA());
          }}
        >
          <i className="bi bi-chevron-double-right text-xl"></i> <br />
          <span className="text-xs">TBA</span>
        </Link>
        <Link
          to="/"
          className={`mx-3 text-sm ${
            status === "RELEASING" ? "isActive" : "notActive"
          } cursor-pointer`}
          onClick={() => {
            dispatch(changeSeasonToAiring());
          }}
        >
          <i className="bi bi-calendar text-xl"></i> <br />
          <span className="text-xs">Airing</span>
        </Link>
        <Link
          to="/reviews"
          className={`mx-3 text-sm ${
            season === "REVIEWS" ? "isActive" : "notActive"
          } cursor-pointer`}
          onClick={() => {
            dispatch(changeToReviews());
          }}
        >
          <i className="bi bi-newspaper text-xl"></i>
          <br />
          <span className="text-xs">Reviews</span>
        </Link>
        <div className="hidden lg:flex">
          <MyListBox />
        </div>
      </div>
    </div>
  );
}

export default Header;
