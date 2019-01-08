import React from 'react'

export default class Observer extends React.Component {
  constructor() {
    super()
    this.state = {
      component: null
    }
    this.container = null
  }

  componentDidMount() {
    this.io = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting) {
          this.io.unobserve(this.container)
          this.props.load().then(module => this.setState({component: module.default}))
        }        
      }
    )
    this.io.observe(this.container)
  }

  componentWillUnmount() {
    this.io.unobserve(this.container)
  }

  render() {
    return <div ref={div => this.container = div}>{this.props.children(this.state.component)}</div>
  }
}