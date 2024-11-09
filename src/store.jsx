import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./todoslice";

const store=configureStore({
    reducer:{
        todo:myReducer
    }
})
export default store;