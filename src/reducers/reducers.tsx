export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      return {
        ...state,
        theme: action.payload,
      };
    case "SET_DATA":
      return {
        ...state,
        data: action.payload,
      };
    case "TOGGLE_FAVORITE":
      const data = state.data.map((user) => {
        if (user.id === action.payload.id) {
          const obj = {
            ...user,
            isFavorite: action.payload.isFavorite,
          };
          return obj;
        }
        return user;
      });
      return {
        ...state,
        data,
      };

    default:
      return state;
  }
};
