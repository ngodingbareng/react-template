import { GET_USERS, USER_INSERT, USER_DELETE, USER_DETAIL, USER_UPDATE } from "./types";
import axios from "axios";

export const getUsers = () => async dispatch => {
  const res = await axios.get("http://localhost/react/react-api/api/users.php");
  dispatch({
    type: GET_USERS,
    payload: res.data.data
  });
};

export const userDetail = id => async dispatch => {
  const res = await axios.get(
    `http://localhost/react/react-api/api/user_detail.php?id=${id}`
  );
  dispatch({
    type: USER_DETAIL,
    payload: res.data.data
  });
};

export const userDelete = id => async dispatch => {
  try {
    await axios.delete(
      `http://localhost/react/react-api/api/user_delete.php?id=${id}`
    );
    dispatch({
      type: USER_DELETE,
      payload: id
    });
  } catch (e) {
    dispatch({
      type: USER_DELETE,
      payload: id
    });
  }
};

export const userInsert = user => async dispatch => {
  const res = await axios.post(
    "http://localhost/react/react-api/api/user_insert.php",
    JSON.stringify(user)
  );
  dispatch({
    type: USER_INSERT,
    payload: res.data.data
  });
};

export const userUpdate = user => async dispatch => {
  const res = await axios.post(`http://localhost/react/react-api/api/user_update.php?id=${user.id}`, JSON.stringify(user));
  dispatch({
    type: USER_UPDATE,
    payload: res.data.data
  });
};
