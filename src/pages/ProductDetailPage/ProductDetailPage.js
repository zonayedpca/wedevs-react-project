import React from "react";
import { useParams } from "react-router-dom";
import { useFetchProducts } from "../../hooks/useFetchProducts";

import "./ProductDetailPage.css";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetchProducts();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  const product = data?.find((item) => item.id === Number(id));

  return (
    <div className="product-detail-page">
      <div className="product-detail">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        <h3>{product.title}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetailPage;
