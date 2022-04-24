import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugResolved,
  getUnresolvedBugs,
  bugAssignedToUser,
  getBugsByUser,
} from "./store/bugs";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";

const store = configureStore();

store.subscribe(() => {
  console.log("store changed", store.getState());
});

/*
store.dispatch(actions.bugAdded("bug 1!"));
store.dispatch(actions.bugResolved(1));
*/

store.dispatch(userAdded({ name: "User 1" }));
// store.dispatch(userAdded({ name: "User 2" }));
// store.dispatch(projectAdded({ name: "Project 1" }));
// store.dispatch(bugAdded({ description: "Bug 1" }));
// store.dispatch(bugAdded({ description: "Bug 2" }));
// store.dispatch(bugAdded({ description: "Bug 3" }));
// store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));
// store.dispatch(bugResolved({ id: 1 }));

const unresolvedBugs = getUnresolvedBugs(store.getState());

console.log(unresolvedBugs);

const bugs = getBugsByUser(1)(store.getState());
console.log(bugs);
