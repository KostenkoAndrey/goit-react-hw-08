import { useEffect } from 'react';
import { lazy, Suspense } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { selectorIsRefreshing } from './redux/auth/selectors';
import { refreshThunk } from './redux/auth/operations';

import './App.css'
import { Toaster } from "react-hot-toast";

const Layout = lazy(()=>import("./components/Layout/Layout")); 
const HomePage = lazy(()=> import("./pages/HomePage/HomePage"));
const ContactsPage = lazy(()=> import("./pages/ContactsPage/ContactsPage"));
const RegistrationPage = lazy(()=> import("./pages/RegistrationPage/RegistrationPage"));
const LoginPage = lazy(()=> import("./pages/LoginPage/LoginPage"));
const NotFoundPage = lazy(()=> import("./pages/NotFoundPage/NotFoundPage"));
const PrivateRoute = lazy(()=> import("./components/PrivateRoute/PrivateRoute"));
const RestrictedRoute = lazy(()=> import("./components/RestrictedRoute/RestrictedRoute"));



function App() {
const isRefreshing = useSelector(selectorIsRefreshing);
const dispatch = useDispatch();
useEffect(()=> {
  dispatch(refreshThunk());
},[dispatch]);

return isRefreshing ? null : (
    <>
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='/contacts' element={
        <PrivateRoute>
          <ContactsPage/>
        </PrivateRoute>}/>
      </Route>
      <Route path='/register' element={
        <RestrictedRoute>
          <RegistrationPage/>
        </RestrictedRoute>}/>
      <Route path='/login' element={
        <RestrictedRoute>
          <LoginPage/>
        </RestrictedRoute>
        }/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    </Suspense>
    <Toaster position="top-center" reverseOrder={false} />
    </>
  )};

export default App;
