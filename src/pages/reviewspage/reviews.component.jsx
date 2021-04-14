import React from "react";

import Container from "react-bootstrap/Container";

import ReviewDirectory from "../../components/review-directory/review-directory.component";

const ReviewsPage = () => (
  <Container fluid className="mt-3 mb-5">
    <div className="flex justify-between items-center lg:hidden text-gray-200 pt-1.5 pb-3 text-left">
      <div className="font-bold text-lg">Nekomori</div>{" "}
      <div className="text-sm text-gray-300"> Recent Reviews</div>
    </div>
    <div className="homepage md:mx-9">
      <ReviewDirectory />
    </div>
  </Container>
);

export default ReviewsPage;
