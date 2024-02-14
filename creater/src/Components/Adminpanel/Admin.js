import React from 'react'
import Dashboard from './Dashboard'
import Footers from './Footer'
import Headers from './Headers'
import Sidemenu from './Sidemenu'

const Admin = () => {
  return (
    <div className='wrapper'>
      <Headers />
      <Sidemenu />
      <Dashboard />
      <Footers />
    </div>
  )
}

export default Admin