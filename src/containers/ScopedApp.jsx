import { connect } from 'react-redux'
import App from '../components/App'

const mapStateToProps = state => ({
  isRTP: (((state.oidc.user || {}).profile || {}).groups || []).includes('rtp'),
  oidc: state.oidc
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
