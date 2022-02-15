import React from "react"
import { Routes, Route } from "react-router-dom"
import { Detail } from "../pages/Detail"
import { Home, NotFound404, Login } from "../pages/index"
import PrivateRouter from "./PrivateRouter"

const Routers = (props) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRouter>
            <Home />
          </PrivateRouter>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/detail">
        <Route
          path=":movieId"
          element={
            <PrivateRouter>
              <Detail />
            </PrivateRouter>
          }
        />
      </Route>
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  )
}

export default Routers
