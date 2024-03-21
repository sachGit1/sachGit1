import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  products: undefined,
  loading: false,
  product: undefined,
  error: "",
};
const getNewProducts = (id, products) => {
  let productList = [];

  productList = products.filter((product) => id !== product._id);

  return productList;
};
const productSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    productRequest: (state) => {
      state.loading = true;
    },
    productSuccess: (state, action) => {
      state.products = action.payload.products;
      state.loading = false;
    },
    addProductSuccess: (state, action) => {
      state.products.push(action.payload.product);
      state.loading = false;
    },
    deleteProductSuccess: (state, action) => {
      state.products= getNewProducts(action.payload, current(state.products));
      state.loading = false;
    },
    getProductByIdSuccess: (state, action) => {
      state.product = action.payload.product;
      state.loading = false;
    },
    productFail: (state, action) => {
      state.products = undefined;
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  productRequest,
  productSuccess,
  productFail,
  getProductByIdSuccess,
  addProductSuccess,
  deleteProductSuccess,
} = productSlice.actions;

export default productSlice.reducer;
