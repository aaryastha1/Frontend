// import { useQuery } from '@tanstack/react-query';
// import axios from '../api/api';  // your axios instance with baseURL

// export const useProductsByCategory = (categoryName) => {
//   return useQuery({
//     queryKey: ['products', categoryName],
//     queryFn: async () => {
//       if (!categoryName) return []; // safety fallback
//       const res = await axios.get(`/products/category/${categoryName}`);
//       return res.data.products;
//     },
//     enabled: !!categoryName, // only run if categoryName exists
//   });
// };

import { useQuery } from '@tanstack/react-query';
import axios from '../api/api';  // your axios instance baseURL should be set to http://localhost:5006/api

export const useProductsByCategory = (categoryName) => {
  return useQuery({
    queryKey: ['products', categoryName],
    queryFn: async () => {
      // Use query param route that works with your backend
      const res = await axios.get(`/user/products?categoryName=${categoryName}`);
      return res.data.products;  // array of products
    },
    enabled: !!categoryName,
  });
};

