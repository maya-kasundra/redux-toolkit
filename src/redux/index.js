import { configureStore } from "@reduxjs/toolkit";
import { taskAdded } from "./task";


const store = configureStore();

store.dispatch(taskAdded({
    id:1,
    description:"sleeping",
    status:"Done"
}))

store.dispatch(taskAdded({
    id:2,
    description:"Book Reading",
    status:"Pending"
}))

store.dispatch(taskAdded({
    id:3,
    description:"going to gym",
    status:"Done"
}))