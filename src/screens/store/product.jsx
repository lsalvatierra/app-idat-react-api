import React from "react";
import { useParams } from "react-router-dom"

export function ProductScreen() {
    const params = useParams();
    function isValidProductId() {
        const invalid = Number.isNaN(params.id);
    
        return !invalid;
      }

    return (<h1>Product ID {params.id}</h1>);
}