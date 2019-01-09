import React from 'react'
import Loadable from 'react-loadable'
import {connect} from 'react-redux'

class LoadableModal extends React.Component {
  constructor() {
    super()
    this.state = {
      loaded: false,
      component: null
    }
  }

  componentDidUpdate() {
    if (this.props.showModal && !this.state.loaded) {
      this.setState({
        loaded: true,
        component: Loadable({
          loader: () => import(/* webpackChunkName: "Modal" */ './CarouselModal.jsx'),
          loading: () => '' 
        })
      })
    }
  }


  render() {
    const Component = this.state.component
    return Component ? <Component /> : ''
  }
}

const mapStateToProps = ({showModal}) => ({showModal})
export default connect(mapStateToProps)(LoadableModal)

