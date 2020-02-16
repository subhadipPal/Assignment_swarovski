import { PERFORM_SEARCH } from "./types";
import searchBase from "../api/searchBase";

export const performSearch = searchKey => async dispatch => {
  var response = await searchBase.post("", {
    requests: [
      {
        indexName: "ikea",
        params: `query=${searchKey}&hitsPerPage=16`
      }
    ]
  });
  dispatch({
    type: PERFORM_SEARCH,
    payload: response.data
  });
};
