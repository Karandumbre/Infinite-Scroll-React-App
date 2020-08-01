import axios from 'axios';
import { fetchUserDataRequest, fetchUserDataRequestSuccess, fetchUserDataRequestFailure } from '../Redux/actions'
export const baseUrl = 'https://reqres.in/api/users';
const pages = {};

export const getProfiles = (pageNo = 1) => {
  return (dispatch) => {
      dispatch(fetchUserDataRequest())
      axios.get(`${baseUrl}?page=${pageNo}`).then(result => {
          if(!pages[result.data.page]){
            dispatch(fetchUserDataRequestSuccess(result.data))
            pages[result.data.page] = 'visited';
          }
      }).catch(error => {
          dispatch(fetchUserDataRequestFailure(error.message))
      })
  }
}



// export const UpdateTodo = (id,data) => {
// return (dispatch) => {
//     dispatch(fetchTodoDataRequest())
//     return axios
//     .post(`${devUrl}/update/${id}`,data).then((res) => {
//       notifyInfo(res.data);
//       dispatch(fetchRequest());
//     })
//     .catch((error) => {
//       notifyError(error.data);
//     });
// }
// }