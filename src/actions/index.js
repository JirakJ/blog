import _ from "lodash";
import jsonPlaceholderTypicode from "../api/jsonPlaceholderTypicode";

export const fetchPosts = () => async dispatch => {
        const response = await jsonPlaceholderTypicode.get("/posts");
        dispatch({
            type: "FETCH_POSTS",
            payload: response.data
        })
    };

export const fetchUser = (userId) => async dispatch => {
    const response = await jsonPlaceholderTypicode.get(`/users/${userId}`);
    dispatch({
        type: "FETCH_USER",
        payload: response.data
    })
};


export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    _.chain(getState().posts)
        .map("userId")
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value();
};
