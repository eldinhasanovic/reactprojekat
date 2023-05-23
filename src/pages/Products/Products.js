// Products.js
import React, { useState, useEffect, useContext } from "react";
import Cards from "../../components/Cards/Cards";
// import products from "../../common/product.json";
import "./Products.css";
import Currency from "../Products/Currency/Currency";
import { Pagination } from "@mui/material";
import { AppContext } from "../../AppContext/AppContext";
import { toast } from "react-hot-toast";

export default function Products() {
  const { products } = useContext(AppContext);
  const [product, setProduct] = useState(products);
  const [currency, setCurrency] = useState(1);
  const [page, setPage] = useState(1);
  // const nrOfProducts =
  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const productsPerPage = 10;
  const numOfPages = Math.ceil(products.length / productsPerPage);
  const currencySign = (currency) => {
    switch (currency) {
      case 1:
        return "$";
      case 0.92:
        return "€";
      case 108.36:
        return "din";
      case 6.97:
        return "kn";
      case 1.81:
        return "KM";
    }
  };

  const convertCurrency = (el) => {
    if (currency) {
      const price = el * currency;
      return Math.round(price, 2);
    }
    return el;
  };

  const handleCurrencyChange = (curr) => {
    setCurrency(curr);
  };

  useEffect(() => {
    setProduct(products);
  }, [currency]);

  return (
    <div className="product-body">
      <div className="set-currency">
        <Currency handleCurrencyChange={handleCurrencyChange} />
      </div>
      <div className="products-container">
        {product
          .map((e) => (
            <Cards
              onClick={() => {
                toast.success("Successfully toasted!");
              }}
              key={e.id}
              productImage={e.imageURL}
              productName={e.title}
              productPrice={convertCurrency(e.price)}
              currencySign={currencySign(currency)}
            />
          ))
          .slice((page - 1) * productsPerPage, page * productsPerPage)}
      </div>
      <Pagination
        className="pagination"
        count={numOfPages}
        page={page}
        size="large"
        variant="outlined"
        color="primary"
        onChange={handleChange}
      />
    </div>
  );
}
