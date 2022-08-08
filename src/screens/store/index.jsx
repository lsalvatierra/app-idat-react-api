import React from "react";
import styled from "styled-components";
import { Layout } from "../../layout/main";
import { Products } from "./components";
import { useProducts } from "./hooks";

const Content = styled.div`
  display: flex;
  margin-top: 44px;
`;

export function StoreScreen() {

    const products = useProducts();

    return <Layout minHeight={300}>
        <Content>
            {products && <Products products={products} />}
        </Content>        
    </Layout>;
}