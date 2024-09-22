import React from "react";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import ProductCard from "../ProductCard/ProductCard";

import "./ProductList.css";

const ProductList = () => {
  const { data, isLoading, error } = useFetchProducts();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error fetching products</p>;

  return (
    <div className="product-list">
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
