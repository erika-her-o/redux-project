export const setFavorite = (payload) => ({
    type: "SET_FAVORITE",
    payload,
});

export const delateFavorite = (payload) => ({
    type: "FAVORITE_FAVORITE",
    payload,
});

export const setSection = (payload) => ({
    type: "SET_SECTION",
    payload,
});

//CHARACTERS -> FAVORITES ->DISPATCH(SET_SECTION) ->FAVORITES

