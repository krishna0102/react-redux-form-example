import _ from 'lodash';
import {FETCH_POSTS, FETCH_POST, DELETE_POST} from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            //Fetch all post
            return _.mapKeys(action.payload.data, 'id');
        case DELETE_POST:
            //Remove deleted post from local state
            return _.omit(state, action.payload);
        case FETCH_POST:
            //Return post by id
            return {
                ...state,
                [action.payload.data.id]: action.payload.data
            };
        default:
            return state;
    }
}