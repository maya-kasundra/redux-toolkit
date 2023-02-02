import { configureStore } from "@reduxjs/toolkit";
import { addToCart, removeFromCart } from "./carts";
import { taskAdded, taskDeleted } from "./task";


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

store.dispatch(addToCart({
    id:1,
    name:product1
}))
store.dispatch(addToCart({
    id:2,
    name:product2
}))

store.dispatch(removeFromCart({
    id:1,
    name:product1
}))

store.dispatch(taskDeleted({id:1}))

console.log(store.getState);