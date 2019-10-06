import React from 'react'
import PropTypes from 'prop-types'
import './spinner.css'

class Spinner extends React.Component {
  render () {
    const { className } = this.props
    return (
      <div className={`spinner ${className}`} />
    )
  }
}

Spinner.propTypes = {
  className: PropTypes.string
}

export default Spinner
