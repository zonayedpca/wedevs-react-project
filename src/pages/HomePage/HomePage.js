import React from "react";

import ProductList from "../../components/ProductList/ProductList";

import { Button, Container } from "../../components/common";

import "./HomePage.css";

const HomePage = () => {
  return (
    <Container>
      <div>
        <h2>Welcome to the Store</h2>
        <Button onClick={() => console.log("clicked anything btn")}>
          Anything
        </Button>
        <Button onClick={() => console.log("clicked anothert btn")}>
          Another
        </Button>
        <ProductList />
      </div>
    </Container>
  );
};

export default HomePage;
