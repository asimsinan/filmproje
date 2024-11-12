const initialState = {
  favoriler: [],
  isAdded: false,
  isRemoved: false,
};
const favorilerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REMOVE_MOVIE":
      return {
        ...state,
        favoriler: state.favoriler.filter((film) => action.payload !== film),
      };
    case "ADD_MOVIE":
      const yeniFavoriler = [...state.favoriler];
      if (!state.favoriler.includes(action.payload))
        yeniFavoriler.push(action.payload);
      return {
        ...state,
        favoriler: yeniFavoriler,
        isAdded: true,
      };
    default:
      return state;
  }
};

export default favorilerReducer;
