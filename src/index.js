import configureStore from "./store/configureStore";
import * as actions from "./store/api";
import { loadBugs, resolveBug } from "./store/bugs";

const store = configureStore();

store.dispatch(loadBugs());

setTimeout(() => store.dispatch(resolveBug(2)), 2000);
