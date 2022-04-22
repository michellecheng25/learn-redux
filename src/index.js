import configureStore from "./store/configureStore";
import * as actions from "./store/bugs";
import { projectAdded } from "./store/projects";

const store = configureStore();

store.subscribe(() => {
  console.log("store changed", store.getState());
});

/*
store.dispatch(actions.bugAdded("bug 1!"));
store.dispatch(actions.bugResolved(1));
*/

store.dispatch(projectAdded({ name: "Project 1" }));
store.dispatch(actions.bugAdded({ description: "Bug 1" }));
store.dispatch(actions.bugResolved({ id: 1 }));
