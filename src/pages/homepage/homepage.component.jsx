import React from "react";

import Directory from "../../components/directory/directory.component";

import Container from "react-bootstrap/Container";

import "./homepage.styles.scss";

const HomePage = () => (
  <Container fluid className="my-4">
    <div className="homepage">
      <Directory />
    </div>
  </Container>
);

export default HomePage;
