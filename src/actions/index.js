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
    //use lodash map to find out unique user ids
    const uniqueUserIds = _.uniq(_.map(getState().posts,"userId"));
    // console.log(uniqueUserIds)
    uniqueUserIds.forEach(id => dispatch(fetchUser(id)));
};
