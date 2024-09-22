import { useQuery } from "@tanstack/react-query";

const fetchProducts = () => {
  return fetch("https://fakestoreapi.com/products").then((res) => res.json());
};

export const useFetchProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};
