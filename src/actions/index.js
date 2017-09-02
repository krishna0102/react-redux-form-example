import axios from 'axios';
export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api/';
// const API_KEY = '?key=PAPERcLIP1234';
export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts`);
    return {type: FETCH_POSTS, payload: request};
}

export function createPost(values, callback) {
    const request = axios
        .post(`${ROOT_URL}/posts`, values)
        .then(() => callback());
    return {type: CREATE_POST, payload: request};
}
/**
 * Fetch the post details by id
 * @param {post id} id
 */
export function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}`);
    return {type: FETCH_POST, payload: request};
}
/**
 *
 * @param {post id} id
 */
export function deletePost(id, callback) {
    const request = axios
        .delete(`${ROOT_URL}/posts/${id}`)
        .then(() => callback());
    return {type: DELETE_POST, payload: id}
}