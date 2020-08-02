/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import ProfileContainer from './containers/ProfileContainer';
import { getProfiles } from './services/k12Api'
import { useInfiniteScroll } from './hooks/useInfiniteScroll';
import Loader from './utils/components/loader';
import './App.css'
const App = () => {
  const { count } = useInfiniteScroll();
  const isLoading = useSelector(state => state.loading);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProfiles(count))
  }, [count]);

return <>
    {
      isLoading && <Loader/>
    }
    <ProfileContainer />
 </>
}

export default App