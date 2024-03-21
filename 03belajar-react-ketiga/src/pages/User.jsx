import React from 'react'
import AddUser from '../components/User/AddUserOld'
import GetListUser from '../components/User/GetListUser'
import { Outlet } from 'react-router-dom'

const User = () => {
  return (
    <>
      <GetListUser />
      <Outlet />
    </>
  )
}

export default User