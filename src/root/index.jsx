import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { navbar } from '../utils/navbar';
import Navbar from '../components/navbar'

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>

          {
            navbar.map(({ path, element, id }) => {

              return <Route key={id} path={path} element={element} />


            })
          }
        </Route>
        <Route path="/home" element={<h1>Home</h1>} />
        <Route path="*" element={<h1>404 not founded</h1>} />
        <Route path="/" element={<Navigate to={"/home"} />} />
      </Routes>
    </BrowserRouter>
  )


}

export default Root;