import React, { useState } from "react";
import styled from "styled-components";
import { CardProduct } from "../../../components";


const ProductsStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 40px;
`;

const ProductRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export function Products({ products }) {
  return (
    <ProductsStyled>
      {products &&
        products.map((items, index) => (
          <ProductRow key={`product-row-${index}`}>
            {items.map(({ key, product }) => (
              <CardProduct
                key={key}
                product={product}
                width={280}
                height={241}
                imageHeight={129}
              />
            ))}
          </ProductRow>
        ))}
    </ProductsStyled>
  );
}