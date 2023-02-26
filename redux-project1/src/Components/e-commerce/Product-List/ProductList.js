import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../redux/Slices/ProductSlice";
import SingleProduct from "../Single-Product/SingleProduct";
import "./ProductList.css";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  const status = useSelector((state) => state.productReducer.status);
  const error = useSelector((state) => state.productReducer.error);
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  if (status === "loading") {
    return (
      <div style={{ position: "absolute", left: "50%", top: "50%" }}>
        <h1 style={{ display: "inline", paddingRight: "10px" }}>Loading...</h1>
        <Spin style={{ display: "inline" }} indicator={antIcon} />
      </div>
    );
  }
  if (status === "failed") {
    return (
      <div style={{ position: "absolute", left: "40%", top: "50%" }}>
        <h1>Oops, something went wrong!</h1>
        <h3>{error}</h3>
      </div>
    );
  }

  return (
    <div className="productList">
      {products.map((item) => (
        <SingleProduct key={item.id} Product={item} />
      ))}
    </div>
  );
}

export default ProductList;
