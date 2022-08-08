import { useApi } from "../../../hooks";
import { mapProductsDtoToModel } from "../core/mappers";

export function useProducts() {
  const { response } = useApi("/products");
  if (!response) return null;
  const products = response.map(product => mapProductsDtoToModel(product));

  const data = [];
  let i = 0;

  products.forEach((product, index) => {
    if (index % 3 === 0) {
      data[i] = [];
    }

    data[i].push({
      key: `product-${index}`,
      product,
    });

    if (index % 3 === 2) i += 1;
  });

  return data;
  
}