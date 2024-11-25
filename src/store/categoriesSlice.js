import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  categoryData: null,
  searchValue: "",
};

export const categoriesSlice = createSlice({
  name: "categoriesSlice",
  initialState,
  reducers: {
    setCategoryData(state, action) {
      state.categoryData = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export function getProductsWithCategory(categoryName) {
  return function (dispatch) {
    dispatch(setCategoryData(null));
    axios
      .get(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((resp) => {
        dispatch(setCategoryData(resp.data));
      });
  };
}

export const { setCategoryData, setSearchValue } = categoriesSlice.actions;

export default categoriesSlice.reducer;
