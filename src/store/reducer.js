import { FETCHUSERDATA, FETCHUSERDATASUCCESS, FETCHUSERDATAFAILURE } from './types';

export const initialState = {
  data: [],
  error:'',
  total_pages:1,
  current_page:1,
  loading:false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHUSERDATA: return { ...state, loading:true }

    case FETCHUSERDATASUCCESS:
    return {
      ...state,
      loading:false,
      data: [...state.data, ...action.payload.data],
      total_pages: action.payload.total_pages,
      current_page: action.payload.page
    }

    case FETCHUSERDATAFAILURE : return {...state, loading:false, error: action.payload }
    default: return state;
  }
}

export default reducer