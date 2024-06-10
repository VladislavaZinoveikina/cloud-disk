import React, { useEffect } from 'react';
import './app.css';
import Navbar from './navbar/Navbar';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Registration from './authorization/Registration';
import Login from './authorization/Login';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../actions/user';
import Disk from './disk/Disk';
import Profile from './profile/Profile';

function App() {
  const isAuth = useSelector(state => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth())
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar/>
        <div className='wrap'>
        <Routes>
        {!isAuth ? (
          <>
           <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
            </>
              ) : (
            <>
              <Route path="/" element={<Disk />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
                )}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
