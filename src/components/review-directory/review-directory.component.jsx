import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as Constants from "../../constants";

import axios from "axios";

import CardDeck from "react-bootstrap/CardDeck";

import SkeletonLoader from "../skeleton-loader/skeleton-loader.component";
import ReviewCard from "../review-card/review-card.component";

function ReviewDirectory() {
  const [data, setData] = useState({ review: [], loading: true });
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      setData({ loading: true });
      // Call GraphQL API
      await axios
        .post(Constants.GRAPHQL_API, {
          query: Constants.REVIEW_QUERY,
        })
        .then(function (response) {
          // Update Component State
          const result = response.data.data;
          setData({ review: result.Page.reviews, loading: false });
        });
    };

    fetchData();
  }, [dispatch]);

  const loaderArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div className="directory-menu pb-5">
      {data.loading ? (
        <CardDeck className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 items-stretch m-0">
          {loaderArray.map((index) => (
            <SkeletonLoader key={index} height={"h-44"} />
          ))}
        </CardDeck>
      ) : (
        <CardDeck className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 items-stretch m-0">
          {data.review.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </CardDeck>
      )}
    </div>
  );
}

export default ReviewDirectory;
