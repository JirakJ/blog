import _ from "lodash";
import jsonPlaceholderTypicode from "../api/jsonPlaceholderTypicode";

export const fetchPosts = () => async dispatch => {
        const response = await jsonPlaceholderTypicode.get("/posts");
        dispatch({
            type: "FETCH_POSTS",
            payload: response.data
        })
    };

export const fetchUser = (userId) => dispatch => _fetchUser(userId, dispatch);

//private function
const _fetchUser = _.memoize(async (userId, dispatch) => {
    const response = await jsonPlaceholderTypicode.get(`/users/${userId}`);
    dispatch({
        type: "FETCH_USER",
        payload: response.data
    })
});
