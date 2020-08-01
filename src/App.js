/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import ProfileContainer from './containers/ProfileContainer';
import { getProfiles } from './services/k12Api'
import { useInfiniteScroll } from './hooks/useInfiniteScroll';

import './App.css'
const App = () => {
  const { count } = useInfiniteScroll();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProfiles(count))
  }, [count]);

 return <ProfileContainer />
}

export default App