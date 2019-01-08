import React from 'react'
import Loadable from 'react-loadable'

export default Loadable({
  loader: () => import(/* webpackChunkName: "Description" */ './Description.jsx'),
  loading: () => <div style={{height: '1000px', backgroundColor: 'black'}}>Loading</div>
})