import React from "react";

import Directory from "../../components/directory/directory.component";

import Container from "react-bootstrap/Container";

import MyListbox from "../../components/listbox/listbox-component";

import "./homepage.styles.scss";

const HomePage = () => (
  <Container fluid className="mt-3 mb-5">
    <MyListbox />
    <div className="homepage md:mx-9">
      <Directory />
    </div>
  </Container>
);

export default HomePage;
