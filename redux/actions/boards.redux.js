import axios from "axios";

export const FETCH_BOARDS = "FETCH_BOARDS";
// const server = "http://localhost:4008/v1";
// const server = "http://home420.trueddns.com:57527/v1";
const server = "https://api.matchchemicals.com/admin";

export const fetchBoards = () => async (dispatch) => {
  const boards = await axios.get(`${server}/getBoards`);

  return dispatch({ type: FETCH_BOARDS, payload: boards.data });
};
