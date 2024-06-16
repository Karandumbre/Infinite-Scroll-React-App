import axios from "axios";
import {
  fetchUserDataRequest,
  fetchUserDataRequestSuccess,
  fetchUserDataRequestFailure,
} from "../store/actions";
import { notifySuccess, notifyError } from "../utils/toast";

export const baseUrl = process.env.REACT_APP_ACCESS_URL;
const pages = {};

export const getProfiles = (pageNo = 1) => {
  return (dispatch) => {
    dispatch(fetchUserDataRequest());
    axios
      .get(`${baseUrl}?page=${pageNo}`)
      .then((result) => {
        if (!pages[result.data.page]) {
          dispatch(fetchUserDataRequestSuccess(result.data));
          pages[result.data.page] = "visited";
        }
      })
      .catch((error) => {
        notifyError(error);
        dispatch(fetchUserDataRequestFailure(error.message));
      });
  };
};

export const UpdateUser = (id, data) => {
  return (dispatch) => {
    dispatch(fetchUserDataRequest());
    axios
      .put(`${baseUrl}/${id}`, data)
      .then((res) => {
        notifySuccess(`User ${res.data.firstName} updated successfully`);
        dispatch(fetchUserDataRequestSuccess([]));
      })
      .catch((error) => {
        notifyError(error);
        dispatch(fetchUserDataRequestFailure(error.message));
      });
  };
};
