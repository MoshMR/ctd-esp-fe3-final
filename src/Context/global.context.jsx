import { createContext, useEffect, useReducer } from "react";
import { reducer } from "../reducers/reducers";
import { getRequest } from "../utils/AxiosClient";
import { API_ENDPOINTS } from "../constants/api";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/localstorage";

const { USERS } = API_ENDPOINTS;

const favorites = getFromLocalStorage("favorites");

const initialState = {
  data: [],
  theme: "light",
};

export const ContextGlobal = createContext({
  data: [],
  theme: "light",
  toggleTheme: () => {},
  toggleFavorite: () => {},
});

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleTheme = () => {
    dispatch({
      type: "SET_THEME",
      payload: state.theme === "light" ? "dark" : "light",
    });
  };

  const toggleFavorite = (user) => {
    dispatch({
      type: "TOGGLE_FAVORITE",
      payload: user,
    });
  };

  const contextValue = {
    data: state.data,
    theme: state.theme,
    toggleTheme,
    toggleFavorite,
  };

  useEffect(() => {
    const getData = async () => {
      const result = await getRequest(USERS);
      const users = result.map((user) => {
        const isFavorite = favorites.find((fav) => fav.id === user.id);
        return {
          ...user,
          isFavorite: !!isFavorite,
        };
      });
      dispatch({
        type: "SET_DATA",
        payload: users,
      });
    };
    getData();
  }, []);

  useEffect(() => {
    saveToLocalStorage(
      "favorites",
      state.data.filter((ele) => ele.isFavorite)
    );
  }, [state.data]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", state.theme === "dark");
  }, [state.theme]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};
