import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import getQuery, * as Constants from "../../constants";

import axios from "axios";

import SingleCard from "../card/card.component";
import CardDeck from "react-bootstrap/CardDeck";

import "./directory.styles.scss";
import { displayError } from "../../actions";
import ErrorModal from "../../errorModal/errorModal.component";
import SkeletonLoader from "../skeleton-loader/skeleton-loader.component";

function Directory() {
  const season = useSelector((state) => state.navbar.season);
  const status = useSelector((state) => state.navbar.status);
  const year = useSelector((state) => state.navbar.year);

  const error = useSelector((state) => state.errors.errorMessage);
  const [data, setData] = useState({ anime: [], loading: true });
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      setData({ loading: true });
      // Call GraphQL API
      await axios
        .post(Constants.GRAPHQL_API, {
          query: getQuery(year, season, status),
        })
        .then(function (response) {
          // Update Component State
          const result = response.data.data;
          setData({ anime: result.Page.media, loading: false });
        })
        .catch((err) => {
          dispatch(displayError());
        });
    };

    fetchData();
  }, [dispatch, year, season, status]);

  const loaderArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div className="directory-menu pb-5">
      {(() => {
        switch (error) {
          case "429":
            return <ErrorModal />;
          case "zero":
            return;
          default:
            return;
        }
      })()}

      {data.loading ? (
        <CardDeck className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 items-stretch m-0">
          {loaderArray.map((index) => (
            <SkeletonLoader key={index} />
          ))}
        </CardDeck>
      ) : (
        <CardDeck className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 items-stretch m-0">
          {data.anime.map((anime) => (
            <SingleCard key={anime.id} anime={anime} />
          ))}
        </CardDeck>
      )}
    </div>
  );
}

export default Directory;
