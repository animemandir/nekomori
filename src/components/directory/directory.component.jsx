import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import * as Constants from "../../constants";

import axios from "axios";

import SingleCard from "../card/card.component";
import CardDeck from "react-bootstrap/CardDeck";

import "./directory.styles.scss";

function Directory() {
  const season = useSelector((state) => state.navbar.season);
  const [data, setData] = useState({ anime: [] });

  useEffect(() => {
    const fetchData = async () => {
      // Call GraphQL API
      const queryResult = await axios.post(Constants.GRAPHQL_API, {
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
      });

      // Update Component State
      const result = queryResult.data.data;
      setData({ anime: result.Page.media });
    };

    fetchData();
  });

  return (
    <div className="directory-menu">
      <CardDeck className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 items-stretch m-0">
        {data.anime.map((anime) => (
          <SingleCard key={anime.id} anime={anime} />
        ))}
      </CardDeck>
    </div>
  );
}

export default Directory;
