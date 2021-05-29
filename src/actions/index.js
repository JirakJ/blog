import jsonPlaceholderTypicode from "../api/jsonPlaceholderTypicode";

export const fetchPosts = () => async dispatch => {
        const response = await jsonPlaceholderTypicode.get("/posts");
        dispatch({
            type: "FETCH_POSTS",
            payload: response
        })
    };
