import configureStore from "./store/configureStore";
import * as actions from "./store/bugs";

const store = configureStore();

store.subscribe(() => {
  console.log("store changed", store.getState());
});

/*
store.dispatch(actions.bugAdded("bug 1!"));
store.dispatch(actions.bugResolved(1));
*/

store.dispatch(actions.bugAdded({ description: "Bug 1" }));
store.dispatch(actions.bugResolved({ id: 1 }));
