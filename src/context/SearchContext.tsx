import React, { createContext, useReducer } from "react";

type searchState = {
  searchWord: string;
  searchList: [];
  searchInfo: {
    totalResults: string;
  };
  searchLoading : boolean
};

type searchAction = {
  type: string;
  payload: any;
};

const searchReducer = (state: searchState, action: searchAction) => {
  switch (action.type) {
    case "addSearch": {
      return {
        ...state,
        searchWord: action.payload,
      };
    }
    case "setSearchList": {
      return {
        ...state,
        searchList: action.payload,
      };
    }
    case "setSearchInfo": {
      return {
        ...state,
        searchInfo: action.payload,
      };
    }
    case "setSearchLoading": {
      debugger
      return {
        ...state,
        searchLoading: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

const intitalState = {
  searchWord: "",
  searchList: [],
  searchInfo: { totalResults: "" },
  searchLoading : true,
};

export const searchContext = createContext(intitalState);
export const searchDispatchContext = createContext<
  React.Dispatch<searchAction>
>(() => {});

const SearchContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(searchReducer, intitalState);

  return (
    <searchContext.Provider value={state}>
      <searchDispatchContext.Provider value={dispatch}>
        {children}
      </searchDispatchContext.Provider>
    </searchContext.Provider>
  );
};

export { SearchContextProvider };
