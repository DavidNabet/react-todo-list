import {configureStore} from "@reduxjs/toolkit"
import {useDispatch, useSelector} from "react-redux"
import todoReducer from "../features/TodoSlice";

const store = configureStore({
    reducer: {
        todoReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
})



export default store;