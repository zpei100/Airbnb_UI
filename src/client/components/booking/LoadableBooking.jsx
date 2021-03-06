import React from 'react'
import Loadable from 'react-loadable'

export default Loadable({
  loader: () => import(/* webpackChunkName: "Booking" */ './Booking.jsx'),
  loading: () => <div className="loader mx-auto mt-5" style={{height: '50px', width: '50px'}}></div> 
})