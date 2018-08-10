import axios from 'axios';

const API_KEY = '6a78596d062df78380eff5944c4e5567';
const ROOT_URL = "http://reduxblog.herokuapp.com/api/posts";
export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_POSTS = "CREATE_POSTS";
export const FETCH_POST = "FETCH_POST";
export const DELETE_POST = "DELETE_POST";

export function fetchPosts() {
  const url = `${ROOT_URL}?key=${API_KEY}`;
  const response = axios.get(url);

  return {
    type: FETCH_POSTS,
    payload: response
  };
}

export function createPosts(values) {
  const url = `${ROOT_URL}?key=${API_KEY}`;
  const response = axios.post(url, values);
  return {
    type: CREATE_POSTS,
    payload: response
  };
}

export function fetchPost(id) {
  const url = `${ROOT_URL}/${id}?key=${API_KEY}`;
  const response = axios.get(url);

  return {
    type: FETCH_POST,
    payload: response
  };
}

export function deletePost(id) {
  const url = `${ROOT_URL}/${id}?key=${API_KEY}`;
  const response = axios.delete(url);
  return {
    type: DELETE_POST,
    payload: id
  };
}
