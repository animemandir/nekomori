import React, { useState, useEffect } from "react";
import * as Constants from "../../constants";

import axios from "axios";

import SingleCard from "../card/card.component";
import CardDeck from "react-bootstrap/CardDeck";

import "./directory.styles.scss";

function Directory() {
  const [data, setData] = useState({ anime: [] });

  useEffect(() => {
    const fetchData = async () => {
      // Call GraphQL API
      const queryResult = await axios.post(Constants.GRAPHQL_API, {
        query: Constants.GET_ANIME_QUERY,
      });

      // Update Component State
      const result = queryResult.data.data;
      setData({ anime: result.Page.media });
    };

    fetchData();
  });

  return (
    <div className="directory-menu">
      <CardDeck className="custom-deck">
        {data.anime.map((anime) => (
          <SingleCard key={anime.id} anime={anime} />
        ))}
      </CardDeck>
    </div>
  );
}

export default Directory;
