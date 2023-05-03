import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { navbarData } from '../../utils/navbar'
import NotFound from '../NotFound'
import Navbar from '../Navbar'

const Root = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/' element={<Navbar  />} >
        {
          navbarData.map((nav) => (
            !nav.isPrivate ? <Route path={nav.path} element={nav.element} /> : <Route path={nav.path} element={true ? nav.element : <Navigate to='/login' />} />
          ))
        }
      </Route>

      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Root