import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Constants from "../../constants";

import axios from "axios";

import SingleCard from "../card/card.component";
import CardDeck from "react-bootstrap/CardDeck";

import "./directory.styles.scss";
import { displayError } from "../../actions";
import ErrorModal from "../../errorModal/errorModal.component";

function Directory() {
  const season = useSelector((state) => state.navbar.season);
  const error = useSelector((state) => state.errors.errorMessage);
  const [data, setData] = useState({ anime: [] });
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      // Call GraphQL API
      await axios
        .post(Constants.GRAPHQL_API, {
          query: `query {
          Page(page: 1, perPage: 15) {
            pageInfo {
              total
              currentPage
              lastPage
              hasNextPage
              perPage
            }
            media(season: ${season},type: ANIME, seasonYear: 2021, sort: POPULARITY_DESC) {
              id
              status
              episodes
              coverImage {
                large
                color
              }
              studios {
                edges {
                  id
                  isMain @include(if: true)
                  node {
                    name
                  }
                }
              }
              source
              description
              nextAiringEpisode {
                id
                episode
                timeUntilAiring
              }
              title {
                english
                romaji
              }
              startDate {
                year
                month
                day
              }
              genres
            }
          }
        }
        `,
        })
        .then(function (response) {
          // Update Component State
          const result = response.data.data;
          setData({ anime: result.Page.media });
        })
        .catch((err) => {
          dispatch(displayError());
        });
    };

    fetchData();
  }, [dispatch, season]);

  return (
    <div className="directory-menu">
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
      <CardDeck className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 items-stretch m-0">
        {data.anime.map((anime) => (
          <SingleCard key={anime.id} anime={anime} />
        ))}
      </CardDeck>
    </div>
  );
}

export default Directory;
