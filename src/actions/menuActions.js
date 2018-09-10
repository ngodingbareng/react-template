import { GET_MENU } from "./types";
import axios from "axios";

export const getMenu = () => async dispatch => {
  const res = await axios.get("http://localhost/react/react-api/api/menu.php");
  dispatch({
    type: GET_MENU,
    payload: res.data
  });
};
