import { connect } from 'react-redux'
import Profile from '../components/NavBar/Profile'

const mapStateToProps = state => ({
  name: ((state.oidc.user || {}).profile || {}).name,
  username: ((state.oidc.user || {}).profile || {}).preferred_username
})

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
