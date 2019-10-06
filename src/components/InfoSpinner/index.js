import React from 'react'
import PropTypes from 'prop-types'
import Spinner from '../Spinner'
import './infospinner.css'

class InfoSpinner extends React.Component {
  render () {
    return (
      <div className="spinner-container">
        <Spinner className="info-spinner" />
        <span className="spinner-text">{this.props.children}</span>
      </div>
    )
  }
}

InfoSpinner.propTypes = {
  children: PropTypes.any
}

export default InfoSpinner
