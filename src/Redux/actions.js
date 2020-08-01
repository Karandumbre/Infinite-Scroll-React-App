import { FETCHUSERDATA, FETCHUSERDATASUCCESS, FETCHUSERDATAFAILURE } from './types';

export const fetchUserDataRequest = () => {
  return {
      type: FETCHUSERDATA
  }
}

export const fetchUserDataRequestSuccess = (data) => {
  return {
      type: FETCHUSERDATASUCCESS,
      payload: data
  }
}

export const fetchUserDataRequestFailure = (error) => {
  return {
      type: FETCHUSERDATAFAILURE,
      payload: error
  }
}


