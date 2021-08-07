import * as api from '../api';
import { PostActionTypes } from '../constants/actionTypes';

// Action Creators

export const getPosts = () => async(dispatch) => {
    try {
        const {data} = await api.fetchPosts();

        dispatch({ type: PostActionTypes.FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const CreatePost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: PostActionTypes.CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const UpdatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: PostActionTypes.UPDATE, payload: data });
  } catch (error) {
      console.log(error);
  }
}

export const DeletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: PostActionTypes.DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const LikePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: PostActionTypes.UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};