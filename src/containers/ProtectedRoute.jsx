import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import userManager from '../userManager'
import InfoSpinner from '../components/InfoSpinner/index'

const ProtectedRoute = ({ component: Component, user, ...args }) => (
  <Route {...args} render={(props) => {
    if (!user || user.expired) {
      // User is not logged in or their access token has expired
      userManager.signinRedirect()
      return (
        <InfoSpinner>Signing you in, please wait...</InfoSpinner>
      )
    }

    return <Component {...props} />
  }}/>
)

ProtectedRoute.propTypes = {
  component: PropTypes.any,
  user: PropTypes.any,
  args: PropTypes.any
}

const mapStateToProps = (state) => ({
  user: state.oidc.user
})

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProtectedRoute)
