import { createAction, createReducer } from "@reduxjs/toolkit";

export const bugAdded = createAction("BUG_ADDED");
export const bugRemoved = createAction("BUG_REMOVED");
export const bugResolved = createAction("BUG_RESOLVED");

/*
actions
export const bugAdded = (description) => {
  return {
    type: "BUG_ADDED",
    payload: {
      description: description,
    },
  };
};

export const bugResolved = (id) => {
  return {
    type: "BUG_RESOLVED",
    payload: {
      id,
    },
  };
};
*/

//reducer
let lastId = 0;

export default createReducer([], {
  //key: value
  //actions: functions

  [bugAdded.type]: (bugs, action) => {
    bugs.push({
      id: ++lastId,
      description: action.payload.description,
      resolved: false,
    });
  },

  [bugResolved.type]: (bugs, action) => {
    const index = bugs.findIndex((bug) => bug.id === action.payload.id);
    bugs[index].reolved = true;
  },
});

/*
export default function reducer(state = [], action) {
  switch (action.type) {
    //case "BUG_ADDED":
    case bugAdded.type:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];

    //case "BUG_REMOVED":
    case bugRemoved.type:
      return state.filter((bug) => bug.id !== action.payload.id);

    //case "BUG_RESOLVED":
    case bugResolved.type:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );
    default:
      return state;
  }
}
*/
