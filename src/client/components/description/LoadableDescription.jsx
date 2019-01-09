import React from 'react'
import Loadable from 'react-loadable'

export default Loadable({
  loader: () => import(/* webpackChunkName: "Description" */ './Description.jsx'),
  loading: () => <React.Fragment>
    <div className="loader mx-auto mt-5" style={{height: '50px', width: '50px'}}></div> 
    <div style={{height: '1000px', backgroundColor: 'black'}}></div>
  </React.Fragment> 
})